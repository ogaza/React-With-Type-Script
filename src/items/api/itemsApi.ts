import { IItem } from '../../models/item';
import { sendMessage } from '../../socket/socket';

export interface IItemsApi {
  get: () => Promise<void>;
  post: (item: IItem) => Promise<void>;
  delete: (itemId: number) => Promise<void>;
}

const namespace = 'item';

export const itemsApi: IItemsApi = {
  get: function () {
    return sendMessage(`${namespace}:get`);
    // throw new Error('Function not implemented.');
  },
  post: function (item) {
    return sendMessage(`${namespace}:post`, item);
  },
  delete: function (itemId) {
    return sendMessage(`${namespace}:delete`, itemId);
  }
};
