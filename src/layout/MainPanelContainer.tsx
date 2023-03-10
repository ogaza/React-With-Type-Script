import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../toDos/actions/actionCreators';
import { useSelector } from 'react-redux';
import { IAppState } from '../store/state';
import { MainPanelLayout } from './MainPanel/MainPanelLayout';
import { TodoList } from '../components/TodoList';
import { AddTodoForm } from '../components/AddTodoForm';

export default function MainPanelContainer() {
  const dispatch = useDispatch();
  const todos = useSelector((state: IAppState) => state.todos);

  const { state } = todos;
  const todosAreBeingLoaded = state === 'LOADING';

  return (
    <MainPanelLayout
      panelLeft={<TodoList todos={todos} onDelete={deleteToDo} />}
      panelRight={<AddTodoForm onSubmit={addToDo} enabled={!todosAreBeingLoaded} />}
    />
  );

  function addToDo(text) {
    dispatch(Actions.addToDo(text));
  }

  function deleteToDo(id) {
    dispatch(Actions.deleteToDo(id));
  }
}
