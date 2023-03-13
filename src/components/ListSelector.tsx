import * as React from 'react';
import './ListSelector.scss';

export function ListSelector() {
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
      <AddListButton />
    </div>
  );
}

export function AddListButton({ onClick = () => {} }) {
  return <span className="add-list-button">+</span>;
}
