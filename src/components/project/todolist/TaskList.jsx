import TaskItem from "./TaskItem";

const TaskList = (props) => {
    const { tasks } = props;
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                />
            ))}
        </ul>
    );
}
export default TaskList;