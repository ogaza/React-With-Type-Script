import * as React from 'react';
import WithClickIndication, { ClickWrapper } from './clickIndication';
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
        const enabled = state !== 'LOADING';

        // return (
        //   <ListButton
        //     key={id}
        //     onClick={onSelected}
        //     onClose={onCloseClick}
        //     closeButtonEnabled={selected}
        //     id={id}
        //     selected={selected}
        //     enabled={enabled}
        //   />
        // );
        return (
          <ListButtonWithIndication
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
      <AddListButtonWithIndication enabled={addButtonEnabled} onClick={onAddButtonClick} />
      {/* <AddListButton enabled={addButtonEnabled} onClick={onAddButtonClick} /> */}
    </div>
  );
}

const ListButtonWithIndication = ClickWrapper(ListButton, 'custom');

export function ListButton({ id, selected, onClick, onClose, enabled, closeButtonEnabled }) {
  const cssClass = `list-selector__item ${selected ? 'list-selector__item--selected' : ''} ${
    enabled ? '' : 'list-selector__item--disabled'
  }`;

  return (
    <div role="button" onClick={handleClick} className={cssClass}>
      {id}
      {closeButtonEnabled && (
        <span className="list-selector__close" onClick={handleClose}>
          +
        </span>
      )}
    </div>
  );

  function handleClick() {
    enabled && onClick(id);
  }

  function handleClose(e) {
    e.stopPropagation();
    enabled && onClose(id);
  }
}

const AddListButtonWithIndication = ClickWrapper(AddListButton, 'custom');

export function AddListButton({ onClick = () => {}, enabled = true }) {
  const cssClass = `add-list-button ${enabled ? '' : 'add-list-button--disabled'}`;

  return (
    <div role="button" onClick={handleClick} className={cssClass}>
      +
    </div>
  );

  function handleClick() {
    enabled && onClick();
  }
}
