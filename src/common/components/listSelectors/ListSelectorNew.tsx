import * as React from 'react';
import './ListSelectorNew.scss';

export function ListSelector({
  elements = [],
  addButtonEnabled = true,
  onSelected = (id) => {},
  onAddButtonClick,
  onCloseClick
}) {
  return (
    <div className="list-selector">
      <div className="list-selector__content">
        {elements.map(({ id, selected, state }) => {
          const enabled = state !== 'LOADING';

          return (
            <ListButton
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
      <AddListButton enabled={addButtonEnabled} onClick={onAddButtonClick} />
    </div>
  );
}

export function ListButton({ id, selected, onClick, onClose, enabled, closeButtonEnabled }) {
  const cssClass = `list-selector__item ${selected ? 'list-selector__item--selected' : ''} ${
    enabled ? '' : 'list-selector__item--disabled'
  }`;

  return (
    <div role="button" onClick={handleClick} className={cssClass}>
      {id !== 0 ? id : '...'}
      {closeButtonEnabled && closeButtonEnabled && <ListButtonClose onClick={handleClose} />}
    </div>
  );

  function handleClick(e) {
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
