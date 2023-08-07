import * as React from 'react';
import { useRef } from 'react';
import './SimpleClickIndicator.scss';

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
