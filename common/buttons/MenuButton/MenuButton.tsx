import * as React from 'react';
import './MenuButton.scss';

export function MenuButton({
  id = 0,
  label = 'label',
  onClick = () => {},
  additionalCssClass = ''
}) {
  const cssClasses = `button--basket-item ${additionalCssClass}`;

  return (
    <div key={id} className={cssClasses} role="button" onClick={handleClick}>
      {label}
    </div>
  );

  function handleClick() {
    onClick();
  }
}
