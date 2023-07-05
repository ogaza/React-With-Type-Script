import { useSelector } from 'react-redux';
import { IAppState } from '../../application/store/state';
import { IBasket } from '../models/basket';

export function useBaskets() {
  // export function useArticles(): IBaskets {
  const { state, collection: baskets } = useSelector(
    (state: IAppState) => state.baskets
  ) || {
    state: null,
    collection: []
  };

  return { get: getBaskets, getSelectedBasket };

  function getBaskets(): IBasket[] {
    return baskets.map((x) => ({
      ...x
    }));
  }

  function getSelectedBasket(): IBasket {
    return baskets.find((x) => x.selected);
  }
}

// export interface GetEntities<T> {
//   get: () => T[];
// }

// export interface IBaskets extends GetEntities<IBasket> {}
