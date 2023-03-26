import * as React from 'react';
import { useRef } from 'react';
import './ClickIndicator.scss';

export function ClickIndicator(WrappedComponent, additionalCssClass = '') {
  return function (props) {
    const wrapperRef = useRef(null);
    const circleRef = useRef(null);

    return (
      <div
        className={`click-indicator__wrapper ${additionalCssClass}`}
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <WrappedComponent {...props} />
        <div className="click-indicator click-indicator--disabled" ref={circleRef}></div>
      </div>
    );

    function handleMouseDown(e) {
      circleRef.current.classList.remove('click-indicator--disabled');

      const x = e.clientX;
      const y = e.clientY;
      const boundingClientRect = wrapperRef.current.getBoundingClientRect();

      circleRef.current.style.left = `${x - boundingClientRect.left}px`;
      circleRef.current.style.top = `${y - boundingClientRect.top}px`;
    }

    function handleMouseUp() {
      circleRef.current.classList.add('click-indicator--disabled');
    }

    function handleTouchStart(e) {
      circleRef.current.classList.remove('click-indicator--disabled');

      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      const boundingClientRect = wrapperRef.current.getBoundingClientRect();

      circleRef.current.style.left = `${x - boundingClientRect.left}px`;
      circleRef.current.style.top = `${y - boundingClientRect.top}px`;
    }

    function handleTouchEnd() {
      circleRef.current.classList.add('click-indicator--disabled');
    }
  };
}
