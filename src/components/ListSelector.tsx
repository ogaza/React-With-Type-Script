import * as React from 'react';
import './ListSelector.scss';

export function ListSelector({ elements = [], addButtonEnabled = true, onSelected = (id) => {} }) {
  return (
    <div className="list-selector">
      {elements.map((x) => (
        <ListButton key={x.id} onClick={onSelected} {...x} />
      ))}
      <AddListButton enabled={addButtonEnabled} />
    </div>
  );
}

export function ListButton({ id, selected, onClick }) {
  const cssClass = `list-selector__item ${selected ? 'list-selector__item--selected' : ''}`;

  return (
    <span role="button" onClick={handleClick} className={cssClass}>
      {id}
    </span>
  );

  function handleClick() {
    onClick(id);
  }
}

export function AddListButton({ onClick = () => {}, enabled = true }) {
  const cssClass = `add-list-button ${enabled ? '' : 'add-list-button--disabled'}`;

  return <span className={cssClass}>+</span>;
}
