export interface IBasketItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  basketId: number;
  value?: number;
}
