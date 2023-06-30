import { IArticle } from '../models/article';

export function useArticles(): IArticles {
  const articles: IArticle[] = [
    { id: 1, name: 'Article 1', price: 19.99 },
    { id: 2, name: 'Article 2', price: 14.99 },
    { id: 3, name: 'Article 3', price: 4.99 }
  ];

  return { get: getArticles };

  function getArticles(): IArticle[] {
    return articles.map((x) => ({
      ...x
    }));
  }
}

export interface GetEntities<T> {
  get: () => T[];
}

export interface IArticles extends GetEntities<IArticle> {}
