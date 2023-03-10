import * as React from 'react';
import './TodoList.scss';

export function TodoList({ todos: { collection, state }, onDelete }) {
  return (
    <section className="todo-list">
      <h3>Items list</h3>
      {collection.map((x) => (
        <TodoListElement {...x} onDeleteClick={onDelete} />
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

function TodoListElement({ id, text, created, onDeleteClick }) {
  const date = created ? new Date(created).toISOString() : '';
  const isPlaceholder = id === 0;

  const cssClass = isPlaceholder ? 'todo--disabled' : '';

  return (
    <div className={`todo ${cssClass}`}>
      <span className="todo__text">{text}</span>
      <span className="todo__created">{date}</span>
      <span className="todo__button">
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

function TodoListElementPlaceholder() {
  // const date = created ? new Date(created).toISOString() : '';
  // const isPlaceholder = id === 0;

  return (
    <div className="todo--placeholder">
      <span className="todo__text"></span>
      <span className="todo__created"></span>
      <span className="todo__button">
        <button disabled>delete</button>
      </span>
    </div>
  );
}

function WithPlaceholder({ reactElement, isPlaceholder }) {
  return isPlaceholder ? <TodoListElementPlaceholder /> : reactElement;
}
