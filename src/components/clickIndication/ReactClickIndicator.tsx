import * as React from 'react';
import { useRef, useState } from 'react';
import { compose } from 'redux';
import './ReactClickIndicator.scss';

export function ReactClickIndicator(Component, additionalCssClass = '') {
  return function (props) {
    const [showIndicator, setShowIndicator] = useState(false);
    const [position, setPosition] = useState([0, 0]);
    const clickIndication = ClickIndicator({ isShown: showIndicator, position: position });
    const wrapperRef = useRef(null);

    const NewComponent = WithIndicator(Component, clickIndication);

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
        {/* <NewComponent {...props} /> */}
      </div>
    );

    function handleMouseDown(e) {
      e.stopPropagation();

      console.log('target:', e.target);
      console.log('ref:', wrapperRef.current);

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

export function WithIndicator(Component, Indicator) {
  return function ComponentWithIndicator(props) {
    return <Component {...props} clickIndicator={Indicator} />;
  };
}

export function WithSimpleClickIndicator(Component, additionalCssClass = '') {
  return function (props) {
    const wrapperRef = useRef(null);

    return (
      <div className={`simple-click-indicator__container ${additionalCssClass}`} ref={wrapperRef}>
        <Component {...props} />
      </div>
    );
  };
}
