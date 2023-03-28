import * as React from 'react';
import { WithSimpleClickIndicator } from './clickIndication';
import './ListSelector.scss';

const ListButtonWithClickIndicator = WithSimpleClickIndicator(
  ListButton,
  'list-selector__item--with-simple-click-indicator'
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
          <ListButtonWithClickIndicator
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
      {id !== 0 ? id : '...'}
      {clickIndicator}
      {closeButtonEnabled && closeButtonEnabled && (
        <ButtonCloseWithReactClickIndicator id={id} enabled={enabled} onClick={handleClose} />
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

const ButtonCloseWithReactClickIndicator = WithSimpleClickIndicator(
  ListButtonClose,
  'list-selector__close--with-simple-close-indicator'
);

function ListButtonClose({ onClick }) {
  return (
    <div className="list-selector__close" onClick={onClick}>
      <span>
        <span>+</span>
      </span>
    </div>
  );
}

const AddListButtonWithIndication = WithSimpleClickIndicator(
  AddListButton,
  'add-list-button--with-simple-click-indicator'
);

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
