import TaskItem from "./TaskItem";

const TaskList = (props) => {
    const { tasks, deleteById } = props;
    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    deleteById={deleteById}
                />
            ))}
        </ul>
    );
}
export default TaskList;