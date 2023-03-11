import * as React from 'react';
import './ItemList.scss';

export function ItemList({ items: { collection, state }, onDelete }) {
  return (
    <section className="item-list">
      <h3>Items list</h3>
      {collection.map((x) => (
        <ItemListElement {...x} onDeleteClick={onDelete} />
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
  const isPlaceholder = id === 0;

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

function ItemListElementPlaceholder() {
  // const date = created ? new Date(created).toISOString() : '';
  // const isPlaceholder = id === 0;

  return (
    <div className="item--placeholder">
      <span className="item__text"></span>
      <span className="item__created"></span>
      <span className="item__button">
        <button disabled>delete</button>
      </span>
    </div>
  );
}

function WithPlaceholder({ reactElement, isPlaceholder }) {
  return isPlaceholder ? <ItemListElementPlaceholder /> : reactElement;
}
