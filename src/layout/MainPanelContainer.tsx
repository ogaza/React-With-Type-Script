import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../toDos/actions/actionCreators';
import { useSelector } from 'react-redux';
import { IAppState } from '../store/state';
import './MainPanelContainer.scss';
import { useState } from 'react';

export default function MainPanelContainer() {
  const todos = useSelector((state: IAppState) => state.todos);

  const dispatch = useDispatch();
  return (
    <section className="main-panel">
      <AddTodoForm onSubmit={addToDo} />
      <TodoList todos={todos} onDelete={deleteToDo} />
    </section>
  );

  function addToDo(text) {
    dispatch(Actions.addToDo(text));
  }

  function deleteToDo(id) {
    dispatch(Actions.deleteToDo(id));
  }
}

function AddTodoForm({ onSubmit }) {
  const [text, setText] = useState('');
  const isValid = !!text;

  return (
    <section className="add-todo">
      <h3>Add todo</h3>
      <input type="text" value={text} onChange={handleChange} />
      <SubmitButton onClick={handleSubmit} label="create" enabled={isValid} />
    </section>
  );

  function handleSubmit() {
    if (isValid) {
      onSubmit(text);
      setText('');
      return;
    }

    console.log('invalid data: empty todo text');
  }

  function handleChange(e) {
    const value = e.target.value;
    setText(value);
  }
}

function TodoList({ todos, onDelete }) {
  return (
    <section className="todo-list">
      <h3>Todolist</h3>
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

function SubmitButton({ onClick, label, enabled = false }) {
  const cssClass = enabled ? '' : 'submit-button--disabled';

  return (
    <div role="button" className={`submit-button ${cssClass}`} onClick={handleSubmit}>
      {label}
    </div>
  );

  function handleSubmit() {
    onClick();
  }
}
