import * as React from 'react';
import { useRef } from 'react';
import {
  RippleUsingTransitions,
  useRippleEventHandlers
} from '../clickIndication/rippleUsingTransitions/RippleUsingTransitions';
import './ListSelectorNew.scss';

export function ListSelector({
  elements = [],
  addButtonEnabled = true,
  onSelected = (id) => {},
  onAddButtonClick,
  onCloseClick
}) {
  const style = { '--n': elements.length } as React.CSSProperties;

  return (
    <div className="list-selector" style={style}>
      <div className="list-selector__content">
        {elements.map(({ id, selected, state }) => {
          const enabled = state !== 'LOADING';

          return (
            <ListButtonWithRipple
              key={id}
              onClick={onSelected}
              onClose={onCloseClick}
              closeButtonEnabled={selected}
              id={id}
              selected={selected}
              enabled={enabled}
            />
          );
        })}
      </div>
      <AddListButtonWithRipple
        enabled={addButtonEnabled}
        onClick={onAddButtonClick}
      />
    </div>
  );
}

export function ListButton({
  id,
  selected,
  onClick,
  onClose,
  enabled,
  closeButtonEnabled
}) {
  const cssClass = `list-selector__item ${
    selected ? 'list-selector__item--selected' : ''
  } ${enabled ? '' : 'list-selector__item--disabled'}`;

  return (
    <div role="button" onClick={handleClick} className={cssClass}>
      <span className="list-selector__value">{id !== 0 ? id : '...'}</span>
      {closeButtonEnabled && closeButtonEnabled && (
        <ListButtonCloseWithRipple onClick={handleClose} />
      )}
    </div>
  );

  function handleClick(e) {
    enabled && onClick(id);
  }

  function handleClose(e) {
    enabled && onClose(id);
  }
}

export function ListButtonWithRipple({
  id,
  selected,
  onClick,
  onClose,
  enabled,
  closeButtonEnabled
}) {
  const ref = useRef(null);
  const { onClick: onClickRipple, ...rest } = useRippleEventHandlers(ref);

  const cssClass = `ripple_ list-selector__item ${
    selected ? 'list-selector__item--selected' : ''
  } ${enabled ? '' : 'list-selector__item--disabled'}`;

  return (
    <div
      role="button"
      onClick={handleClick}
      className={cssClass}
      ref={ref}
      {...rest}
    >
      <span className="list-selector__value">{id !== 0 ? id : '...'}</span>
      {closeButtonEnabled && closeButtonEnabled && (
        <ListButtonCloseWithRipple onClick={handleClose} />
      )}
    </div>
  );

  function handleClick(e) {
    enabled && onClickRipple(e);
    enabled && onClick(id);
  }

  function handleClose(e) {
    enabled && onClose(id);
  }
}

function ListButtonClose({ onClick }) {
  return (
    <div className="list-selector__close" onClick={onClick}>
      <span>
        <span>+</span>
      </span>
    </div>
  );
}

function ListButtonCloseWithRipple({ onClick }) {
  const ref = useRef(null);
  const { onClick: onClickRipple, ...rest } = useRippleEventHandlers(ref);

  return (
    <div
      className="ripple_ list-selector__close"
      onClick={handleClick}
      {...rest}
      ref={ref}
    >
      <span>
        <span>+</span>
      </span>
    </div>
  );

  function handleClick(e) {
    onClickRipple(e);
    onClick();
  }
}

export function AddListButton({ onClick = () => {}, enabled = true }) {
  const cssClass = `add-list-button ${enabled ? '' : 'add-list-button--disabled'}`;

  return (
    <div role="button" onClick={handleClick} className={cssClass}>
      <span>+</span>
    </div>
  );

  function handleClick() {
    enabled && onClick();
  }
}

export function AddListButtonWithRipple({ onClick = () => {}, enabled = true }) {
  const ref = useRef(null);
  const { onClick: onClickRipple, ...rest } = useRippleEventHandlers(ref);

  const cssClass = `ripple_ add-list-button ${
    enabled ? '' : 'add-list-button--disabled'
  }`;

  return (
    <div
      role="button"
      onClick={handleClick}
      className={cssClass}
      ref={ref}
      {...rest}
    >
      <span>+</span>
    </div>
  );

  function handleClick(e) {
    enabled && onClickRipple(e);
    enabled && onClick();
  }
}
