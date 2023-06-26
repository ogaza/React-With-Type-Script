import * as React from 'react';
import { useRef, useState } from 'react';
import './ReactClickIndicator.scss';

/**
 * this component is not used
 * click indication can be done simplier with
 * just css defined for a component
 * wrapped with some div for example
 */
export function ReactClickIndicator(Component, additionalCssClass = '') {
  return function (props) {
    const [showIndicator, setShowIndicator] = useState(false);
    const [position, setPosition] = useState([0, 0]);
    const clickIndication = ClickIndicator({ isShown: showIndicator, position: position });
    const wrapperRef = useRef(null);

    return (
      <div
        className={`react-click-indicator__container ${additionalCssClass}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        ref={wrapperRef}
      >
        <Component {...props} clickIndicator={clickIndication} />
      </div>
    );

    function handleMouseDown(e) {
      e.stopPropagation();

      const x = e.clientX;
      const y = e.clientY;
      const boundingClientRect = wrapperRef.current.getBoundingClientRect();

      setShowIndicator(true);
      setPosition([x - boundingClientRect.left, y - boundingClientRect.top]);
    }

    function handleMouseUp(e) {
      e.stopPropagation();
      setShowIndicator(false);
    }

    function handleTouchStart(e) {
      e.stopPropagation();
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      const boundingClientRect = wrapperRef.current.getBoundingClientRect();

      setShowIndicator(true);
      setPosition([x - boundingClientRect.left, y - boundingClientRect.top]);
    }

    function handleTouchEnd(e) {
      e.stopPropagation();
      setShowIndicator(false);
    }
  };
}

export function ClickIndicator({ isShown = false, position }) {
  const cssClass = `react-click-indicator__circle ${
    isShown ? '' : 'react-click-indicator__circle--disabled'
  }`;
  return (
    <div className="react-click-indicator">
      <div className={cssClass} style={{ left: `${position[0]}px`, top: `${position[1]}px` }}></div>
    </div>
  );
}
