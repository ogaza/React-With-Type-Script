import * as React from 'react';
import { useRef } from 'react';
import './RippleClickIndicator.scss';

export function RippleEffect({ additionalCssClass, children }) {
  const wrapperRef = useRef(null);
  const css = `ripple-click-indicator__container ${additionalCssClass}`;
  const {
    handleClick,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    handleTouchStart,
    handleTouchEnd
  } = useRippleEventHandlers(wrapperRef);

  return (
    <div
      className={css}
      ref={wrapperRef}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="button"
    >
      {children}
    </div>
  );
}

export function WithRipleClickIndicator(Component, additionalCssClass = '') {
  return function (props) {
    const wrapperRef = useRef(null);

    const css = `ripple-click-indicator__container ${additionalCssClass}`;
    const {
      handleClick,
      handleMouseDown,
      handleMouseUp,
      handleMouseLeave,
      handleTouchStart,
      handleTouchEnd
    } = useRippleEventHandlers(wrapperRef);

    return (
      <div
        className={css}
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
      >
        <Component {...props} />
      </div>
    );
  };
}

function useRippleEventHandlers(ref) {
  function handleClick(e) {
    const ripple = ref.current.getElementsByClassName('ripple')[0];

    if (ripple) {
      ripple.remove();
    }

    const circle = document.createElement('span');

    circle.classList.add('ripple');

    const child = ref.current.children[0];

    child.appendChild(circle);

    e.preventDefault();
  }

  function handleMouseDown(e) {
    const x = e.clientX;
    const y = e.clientY;
    const boundingClientRect = ref.current.getBoundingClientRect();

    ref.current.style.setProperty('--top', `${y - boundingClientRect.top}px`);
    ref.current.style.setProperty('--left', `${x - boundingClientRect.left}px`);

    ref.current.classList.add('active');
  }

  function handleMouseUp() {
    ref.current.classList.remove('active');
  }

  function handleTouchStart(e) {
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    const boundingClientRect = ref.current.getBoundingClientRect();

    ref.current.style.setProperty('--top', `${y - boundingClientRect.top}px`);
    ref.current.style.setProperty('--left', `${x - boundingClientRect.left}px`);

    ref.current.classList.add('active');
  }

  function handleTouchEnd() {
    ref.current.classList.remove('active');
  }

  function handleMouseLeave() {
    ref.current.classList.remove('active');
  }

  return {
    handleClick,
    handleMouseDown,
    handleMouseUp,
    handleTouchStart,
    handleTouchEnd,
    handleMouseLeave
  };
}
