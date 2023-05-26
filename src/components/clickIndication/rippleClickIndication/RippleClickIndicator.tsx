import * as React from 'react';
import { useRef } from 'react';
import './RippleClickIndicator.scss';

export function WithRipleClickIndicator(Component, additionalCssClass = '') {
  return function (props) {
    const wrapperRef = useRef(null);

    const css = `ripple-click-indicator__container ${additionalCssClass}`;

    return (
      <div
        className={css}
        ref={wrapperRef}
        onMouseDown={handleMouseDown}
        onMouseUp={() => {
          wrapperRef.current.classList.remove('active');
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={(e) => {
          wrapperRef.current.classList.remove('active');
          console.log('touch end', e);
        }}
        onClick={handleClick}
      >
        <Component {...props} />
      </div>
    );

    function handleClick(e) {
      const ripple = wrapperRef.current.getElementsByClassName('ripple')[0];

      console.log(ripple);

      if (ripple) {
        ripple.remove();
      }

      const circle = document.createElement('span');
      circle.classList.add('ripple');

      const child = wrapperRef.current.children[0];

      child.appendChild(circle);

      e.preventDefault();
    }

    function handleMouseDown(e) {
      const x = e.clientX;
      const y = e.clientY;
      const boundingClientRect = wrapperRef.current.getBoundingClientRect();
      wrapperRef.current.style.setProperty('--top', `${y - boundingClientRect.top}px`);
      wrapperRef.current.style.setProperty('--left', `${x - boundingClientRect.left}px`);

      wrapperRef.current.classList.add('active');
    }

    function handleTouchStart(e) {
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      const boundingClientRect = wrapperRef.current.getBoundingClientRect();

      wrapperRef.current.style.setProperty('--top', `${y - boundingClientRect.top}px`);
      wrapperRef.current.style.setProperty('--left', `${x - boundingClientRect.left}px`);

      wrapperRef.current.classList.add('active');
    }
  };
}
