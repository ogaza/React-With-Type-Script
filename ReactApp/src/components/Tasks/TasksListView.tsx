import { useSelector } from "react-redux";
import { TaskView } from "./TaskView";
import { AppState, TasksState } from "../../appState";

export function TaskListView() {
  const { data, status }: TasksState = useSelector(
    (state: AppState) => state.tasks,
  );

  return (
    <div>
      {status == "pending" && <div>fetching data...</div>}
      {data.map((task) => (
        <TaskView task={task} key={task.id} />
      ))}
    </div>
  );
}
