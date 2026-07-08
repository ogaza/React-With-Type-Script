import { useEffect, useRef } from "react";

export function usePulse(Btn: any) {
  function BtnWithPulse(props: any) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const animatePulse = getAnimatePulse();
    const { children } = props;

    useEffect(() => {
      addPulseClassAndHandler(buttonRef.current, handleEvent);

      return () => removeHandlers(buttonRef.current, handleEvent);
    }, []);

    return (
      <Btn {...props} ref={buttonRef}>
        <span className="pulse__element"></span>
        <span className="pulse__element"></span>
        <span className="pulse__element"></span>
        {children}
      </Btn>
    );

    function handleEvent(e: Event) {
      animatePulse(buttonRef.current, getEventCoordinates(e));
    }
  }

  return BtnWithPulse;
}

function addPulseClassAndHandler(htmlElem: any, handler: any) {
  htmlElem?.classList.add("pulse");
  htmlElem?.addEventListener("mousedown", handler);
}

function removeHandlers(htmlElem: any, handler: any) {
  htmlElem?.removeEventListener("mousedown", handler);
}

const keyframes = [
  {
    transform: "translate(-50%, -50%) scale(0)",
    opacity: "1",
    visibility: "visible",
  },
  { transform: "translate(-50%, -50%) scale(10)", opacity: "0" },
];

const timing = {
  duration: 300,
  iterations: 1,
};

function getAnimatePulse() {
  let idx = 0;
  return function animatePulse(htmlElement: any, eventCoordinates: any[]) {
    const [x, y] = eventCoordinates;

    const pulses = htmlElement.querySelectorAll(".pulse__element");
    const pulse = pulses[idx++ % 3];

    const boundingClientRect = htmlElement.getBoundingClientRect();
    x && pulse.style.setProperty("--x", `${x - boundingClientRect.left}px`);
    y && pulse.style.setProperty("--y", `${y - boundingClientRect.top}px`);

    pulse.animate(keyframes, timing);
  };
}

function getEventCoordinates(e: any) {
  switch (e.type) {
    case "mousedown":
      return [e.clientX, e.clientY];
    case "touchstart": {
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;

      return [x, y];
    }
    default:
      return [];
  }
}
