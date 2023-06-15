import { debounce } from 'lodash';
import * as React from 'react';
import './Button.scss';
import { RippleUsingTransitions } from './clickIndication';
// import { RippleEffect } from './clickIndication/rippleClickIndication/RippleClickIndicator';

export default function SimpleButton({
  label = '',
  disabled = false,
  onClick = () => {},
  cssClassName = null
}) {
  // const cssClasses = classNames(
  //   'simple-button',
  //   { 'simple-button--disabled': disabled },
  //   cssClassName
  // );
  const cssClasses = `simple-button ${cssClassName} ${disabled ? 'simple-button--disabled' : ''}`;

  return (
    <div role="button" onClick={handleClick} className={cssClasses}>
      <div className="simple-button__label">{label}</div>
    </div>
  );

  function handleClick() {
    onClick();
  }
}

export function WithSpinner({ spinnerIsShown, children, cssClassName = '' }) {
  if (spinnerIsShown) {
    return <CustomSpinner className={cssClassName} size={40} />;
  }

  return children;
}

// eslint-disable-next-line no-magic-numbers
export function CreateBasketButton({ onClick, isSpinnerShown, debounceWait = 100 }) {
  return (
    // <RippleEffect additionalCssClass="create-basket__click-indicator">
    <RippleUsingTransitions>
      <WithSpinner spinnerIsShown={isSpinnerShown} cssClassName="create-basket__spinner">
        <SimpleButton
          onClick={debounce(() => onClick(), debounceWait)}
          cssClassName="create-basket__button"
          label="+"
        />
      </WithSpinner>
    </RippleUsingTransitions>
    // </RippleEffect>
  );
}

function CustomSpinner({ className = '', size }) {
  return <div className={className}>{'loading'}</div>;
}
