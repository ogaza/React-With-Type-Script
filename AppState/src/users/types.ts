export type User = {
  id: string;
  name: string;
  taskIds: string[];
};

export type UsersState = User[];

export type AssignToUserPayload = {
  taskId: string;
  userId: string;
};