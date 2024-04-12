export interface IItem {
  id: number;
  text: string;
  completed: boolean;
  created?: Date;
  listId: number;
}
