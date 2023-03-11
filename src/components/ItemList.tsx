import * as React from 'react';
import './ItemList.scss';

export function ItemList({ items: { collection, state }, onDelete }) {
  return (
    <section className="item-list">
      <h3>Items list</h3>
      {collection.map((x) => (
        <ItemListElement key={x.id} {...x} onDeleteClick={onDelete} />
      ))}
    </section>
  );

  // function handleDeleteClick(e) {
  //   const {
  //     target: { dataset: { id: stingId = undefined } = {} }
  //   } = e;

  //   const id = Number(stingId);
  //   if (!id) return;

  //   onDelete(id);
  // }
}

function ItemListElement({ id, text, created, onDeleteClick }) {
  const date = created ? new Date(created).toISOString() : '';
  const isPlaceholder = id <= 0;

  const cssClass = isPlaceholder ? 'item--disabled' : '';

  return (
    <div className={`item ${cssClass}`}>
      <span className="item__text">{text}</span>
      <span className="item__created">{date}</span>
      <span className="item__button">
        <button data-id={id} onClick={handleDeleteClick} disabled={isPlaceholder}>
          delete
        </button>
      </span>
    </div>
  );

  function handleDeleteClick() {
    onDeleteClick(id);
  }
}

export function ItemListPlaceholder() {
  return (
    <section className="item-list--placeholder">
      <h3>Items list</h3>
      {[1, 2, 3, 4, 5].map((x) => (
        <ItemListElementPlaceholder key={x} />
      ))}
    </section>
  );
}

function ItemListElementPlaceholder() {
  return (
    <div className="item--placeholder">
      <span className="item__text">xxx</span>
      <span className="item__created">xxx</span>
      <span className="item__button">xxx</span>
    </div>
  );
}

export function WithPlaceholder({ element, placeholder, showPlaceholder }) {
  return showPlaceholder ? placeholder : element;
}
