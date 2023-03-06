import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../toDos/actions/actionCreators';
import { useSelector } from 'react-redux';
import { IAppState } from '../store/state';
import './MainPanelContainer.scss';

export default function MainPanelContainer() {
  const todos = useSelector((state: IAppState) => state.todos);

  const dispatch = useDispatch();
  return (
    <section className="main-panel">
      This is main panel
      <button
        onClick={() => {
          addToDo();
        }}
      >
        toggle
      </button>
      {todos.todos.map((x) => (
        <div key={x.id}>
          <span>{x.text}</span>
          <span>
            <button onClick={() => deleteToDo(x.id)}>delete</button>
          </span>
        </div>
      ))}
    </section>
  );

  function addToDo() {
    dispatch(Actions.addToDo('test'));
  }

  function deleteToDo(id) {
    dispatch(Actions.deleteToDo(id));
  }
}
