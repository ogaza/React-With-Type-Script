import * as React from 'react';
import './SubmitButton.scss';

export function SubmitButton({ onClick, label, enabled = false }) {
  const cssClass = enabled ? '' : 'submit-button--disabled';

  return (
    <div role="button" className={`submit-button ${cssClass}`} onClick={handleSubmit}>
      {label}
    </div>
  );

  function handleSubmit() {
    onClick();
  }
}
