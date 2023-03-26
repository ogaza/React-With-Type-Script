import * as React from 'react';
import { useRef } from 'react';
import './index.scss';

export function ClickWrapper(WrappedComponent, additionalCssClass = '') {
  return function (props) {
    const wrapperRef = useRef(null);
    const circleRef = useRef(null);
    const circleWrapperRef = useRef(null);

    const { onClick } = props;

    return (
      <div
        className={`with-click-indication ${additionalCssClass}`}
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <WrappedComponent {...props} />
        <div className="circle-wrapper circle-wrapper--disabled" ref={circleWrapperRef}>
          <div
            className="circle circle--disabled"
            ref={circleRef}
            role="button"
            onClick={() => {
              console.log('TEST');
              onClick();
            }}
          ></div>
        </div>
      </div>
    );

    function handleMouseDown(e) {
      circleRef.current.classList.remove('circle--disabled');
      circleWrapperRef.current.classList.remove('circle-wrapper--disabled');

      const x = e.clientX;
      const y = e.clientY;
      const boundingClientRect = wrapperRef.current.getBoundingClientRect();

      circleRef.current.style.left = `${x - boundingClientRect.left}px`;
      circleRef.current.style.top = `${y - boundingClientRect.top}px`;

      // console.log(circleRef.current);
      // console.log(circleRef.current.style);
      // console.log(circleRef.current.style.left);
    }

    function handleMouseUp() {
      // circleRef.current.classList.add('circle--disabled');
      // circleWrapperRef.current.classList.add('circle-wrapper--disabled');
    }

    function handleTouchStart(e) {
      circleRef.current.classList.remove('circle--disabled');
      circleWrapperRef.current.classList.remove('circle-wrapper--disabled');

      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      const boundingClientRect = wrapperRef.current.getBoundingClientRect();

      circleRef.current.style.left = `${x - boundingClientRect.left}px`;
      circleRef.current.style.top = `${y - boundingClientRect.top}px`;

      // console.log(circleRef.current);
    }

    function handleTouchEnd() {
      circleRef.current.classList.add('circle--disabled');
      circleWrapperRef.current.classList.add('circle-wrapper--disabled');
    }
  };
}

export default function WithClickIndication(WrappedComponent) {
  return function (props) {
    // console.log(props);
    // console.log(props.children);

    return (
      <WrappedComponent
        {...props}
        className="with-click-indication"
        // onClick={() => console.log('test')}
      />
    );
  };
}
