import * as React from 'react';
import { ItemTail } from './ItemTail';
import './AddItemPanel.scss';

export function AddItemPanel({ onSubmit, enabled }) {
  const items = [
    { id: 1, text: 'item 1' },
    { id: 2, text: 'item 2' },
    { id: 3, text: 'item 3' },
    { id: 4, text: 'item 4' }
  ];

  return (
    <section className="add-item">
      <h3>Items</h3>
      <div className="items-container">
        {items.map((item) => {
          return (
            <ItemTail
              key={item.id}
              id={item.id}
              text={item.text}
              onClick={onSubmit}
              enabled={enabled}
            />
          );
        })}
      </div>
    </section>
  );
}