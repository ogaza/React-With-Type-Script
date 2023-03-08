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
      This is main panel
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
  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleSubmit}>create</button>
    </>
  );

  function handleSubmit() {
    if (!text) {
      console.log('invalid data: empty todo text');
      return;
    }

    onSubmit(text);
    setText('');
  }

  function handleChange(e) {
    const value = e.target.value;
    console.log(e.target.value);
    setText(value);
  }
}

function TodoList({ todos, onDelete }) {
  return (
    <>
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
    </>
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
