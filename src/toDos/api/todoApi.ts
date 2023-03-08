import { ITodo } from 'models/todo';
import { sendMessage } from '../../socket/socket';

export interface ITodoApi {
  get: () => Promise<void>;
  post: (todo: ITodo) => Promise<void>;
  delete: (todoId: number) => Promise<void>;
}

const namespace = 'todo';

export const todoApi: ITodoApi = {
  get: function () {
    return sendMessage(`${namespace}:get`);
    // throw new Error('Function not implemented.');
  },
  post: function (todo) {
    return sendMessage(`${namespace}:post`, todo);
  },
  delete: function (todoId) {
    return sendMessage(`${namespace}:delete`, todoId);
  }
};
