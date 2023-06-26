import { sendMessage } from '../../socket/socket';

export function createApi(namespace) {
  return {
    get: function (options = {}) {
      return sendMessage(`${namespace}:get`, options);
    },
    post: function (item) {
      return sendMessage(`${namespace}:post`, item);
    },
    delete: function (itemId) {
      return sendMessage(`${namespace}:delete`, itemId);
    }
  };
}
