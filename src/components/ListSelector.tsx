import * as React from 'react';
import { ClickIndicator, ReactClickIndicator } from './clickIndication';
import './ListSelector.scss';

const ListButtonWithReactClickIndicator = ReactClickIndicator(
  ListButton,
  'list-selector__item--with-react-click-indicator'
);

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

        return (
          <ListButtonWithReactClickIndicator
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
    </div>
  );
}

export function ListButton({
  id,
  selected,
  onClick,
  onClose,
  enabled,
  closeButtonEnabled,
  clickIndicator = null
}) {
  const cssClass = `list-selector__item ${selected ? 'list-selector__item--selected' : ''} ${
    enabled ? '' : 'list-selector__item--disabled'
  }`;

  return (
    <div role="button" onClick={handleClick} className={cssClass}>
      {id}
      {clickIndicator}
      {closeButtonEnabled && (
        <span className="list-selector__close" onClick={handleClose}>
          +
        </span>
      )}
    </div>
  );

  function handleClick(e) {
    enabled && onClick(id);
  }

  function handleClose(e) {
    e.stopPropagation();
    enabled && onClose(id);
  }
}

const AddListButtonWithIndication = ClickIndicator(
  AddListButton,
  'add-list-button--with-click-indicator'
);

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
