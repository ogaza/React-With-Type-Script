import * as React from 'react';
import { WithRipleClickIndicator } from '../componentsCommon/clickIndication';
import './ListSelector.scss';

const ListButtonWithClickIndicator = WithRipleClickIndicator(
  ListButton,
  'list-selector__item--with-ripple-click-indicator'
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
      <AddListButtonWithIndication enabled={addButtonEnabled} onClick={onAddButtonClick} />
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
      {closeButtonEnabled && closeButtonEnabled && (
        <ButtonCloseWithReactClickIndicator id={id} enabled={enabled} onClick={handleClose} />
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

const ButtonCloseWithReactClickIndicator = WithRipleClickIndicator(
  ListButtonClose,
  'list-selector__close--with-ripple-click-indicator'
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

const AddListButtonWithIndication = WithRipleClickIndicator(
  AddListButton,
  'add-list-button--with-ripple-click-indicator'
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
