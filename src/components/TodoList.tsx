import * as React from 'react';
import './TodoList.scss';

export function TodoList({ todos, onDelete }) {
  return (
    <section className="todo-list">
      <h3>Todo list</h3>
      {todos.todos.map((x) => (
        <div key={x.id}>
          <span>{x.text}</span>
          <span>
            <button data-id={x.id} onClick={handleDeleteClick}>
              delete
            </button>
          </span>
        </div>
      ))}
    </section>
  );

  function handleDeleteClick(e) {
    const {
      target: { dataset: { id: stingId = undefined } = {} }
    } = e;

    const id = Number(stingId);
    if (!id) return;

    onDelete(id);
  }
}
