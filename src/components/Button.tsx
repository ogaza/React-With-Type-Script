import { debounce } from 'lodash';
import * as React from 'react';
import './Button.scss';
import { RippleUsingTransitions } from '../componentsCommon/clickIndication';

export default function SimpleButton({
  label = '',
  disabled = false,
  onClick = () => {},
  cssClassName = null
}) {
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

export function CreateBasketButton({ onClick, isSpinnerShown, debounceWait = 100 }) {
  return (
    <RippleUsingTransitions>
      <WithSpinner spinnerIsShown={isSpinnerShown} cssClassName="create-basket__spinner">
        <SimpleButton
          onClick={debounce(() => onClick(), debounceWait)}
          cssClassName="create-basket__button"
          label="+"
        />
      </WithSpinner>
    </RippleUsingTransitions>
  );
}

function CustomSpinner({ className = '', size }) {
  return <div className={className}>{'loading'}</div>;
}
