import * as React from 'react';
import './ListSelector.scss';

export function ListSelector({
  elements = [],
  addButtonEnabled = true,
  onSelected = (id) => {},
  onAddButtonClick,
  onCloseClick
}) {
  return (
    <div className="list-selector">
      {elements.map(({ id, selected, state }) => {
        return (
          <ListButton
            key={id}
            onClick={onSelected}
            onClose={onCloseClick}
            closeButtonEnabled={selected}
            {...{ id, selected }}
            enabled={state !== 'LOADING'}
          />
        );
      })}
      <AddListButton enabled={addButtonEnabled} onClick={onAddButtonClick} />
    </div>
  );
}

export function ListButton({ id, selected, onClick, onClose, enabled, closeButtonEnabled }) {
  const cssClass = `list-selector__item ${selected ? 'list-selector__item--selected' : ''} ${
    enabled ? '' : 'list-selector__item--disabled'
  }`;

  return (
    <span role="button" onClick={handleClick} className={cssClass}>
      {id}
      {closeButtonEnabled && (
        <span className="list-selector__close" onClick={handleClose}>
          +
        </span>
      )}
    </span>
  );

  function handleClick() {
    enabled && onClick(id);
  }

  function handleClose(e) {
    e.stopPropagation();
    enabled && onClose(id);
  }
}

export function AddListButton({ onClick = () => {}, enabled = true }) {
  const cssClass = `add-list-button ${enabled ? '' : 'add-list-button--disabled'}`;

  return (
    <span role="button" onClick={handleClick} className={cssClass}>
      +
    </span>
  );

  function handleClick() {
    enabled && onClick();
  }
}
