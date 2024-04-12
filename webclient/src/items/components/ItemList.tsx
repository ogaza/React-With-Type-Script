import * as React from 'react';
import './ItemList.scss';

export function ItemList({ items: { collection, state }, onDelete }) {
  console.log(collection, state);

  return (
    <section className="item-list">
      <h3>Items list</h3>
      {collection.map((x) => {
        const disabled = x.state === 'LOADING';
        return <ItemListElement key={x.id} {...x} enabled={!disabled} onDeleteClick={onDelete} />;
      })}
    </section>
  );
}

function ItemListElement({ id, text, enabled, created, onDeleteClick }) {
  const date = created ? new Date(created).toISOString() : '';
  const cssClass = !enabled ? 'item--disabled' : '';

  return (
    <div className={`item ${cssClass}`}>
      <span className="item__text">{text}</span>
      <span className="item__created">{date}</span>
      <span className="item__button">
        <button data-id={id} onClick={handleDeleteClick} disabled={!enabled}>
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
      <span className="item__text"></span>
      <span className="item__created"></span>
      <span className="item__button"></span>
    </div>
  );
}

export function WithPlaceholder({ element, placeholder, showPlaceholder }) {
  return showPlaceholder ? placeholder : element;
}
