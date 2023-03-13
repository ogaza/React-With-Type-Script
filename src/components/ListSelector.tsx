import * as React from 'react';
import './ListSelector.scss';

export function ListSelector({ addButtonEnabled = true }) {
  const lists = [{ id: 1, selected: true }, { id: 2 }, { id: 3 }];

  return (
    <div className="list-selector">
      {lists.map(({ id, selected }) => (
        <span
          key={id}
          className={`list-selector__item ${selected ? 'list-selector__item--selected' : ''}`}
        >
          {id}
        </span>
      ))}
      <AddListButton enabled={addButtonEnabled} />
    </div>
  );
}

export function AddListButton({ onClick = () => {}, enabled = true }) {
  const cssClass = `add-list-button ${enabled ? '' : 'add-list-button--disabled'}`;

  return <span className={cssClass}>+</span>;
}
