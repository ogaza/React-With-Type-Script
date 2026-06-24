export type Task = {
  id: string;
  title: string;
  completed: boolean;
  assignedTo?: string;
};

export type TasksState = Task[];

export type AssignToUserPayload = {
  taskId: string;
  userId: string;
};

export type ToggleTaskPayload = {
  id: string;
  completed: boolean;
};