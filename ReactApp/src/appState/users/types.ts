export type User = {
  id: string;
  name: string;
  taskIds: string[];
};

export type UsersState = User[];