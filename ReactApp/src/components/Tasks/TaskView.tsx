import { Task } from "../../appState/tasks/types";

export function TaskView({ task }: { task: Task }) {
  return <div>{task.title}</div>;
}