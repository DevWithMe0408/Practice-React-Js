import TaskItem from "./TaskItem";

const TaskList = (props) => {
    const { children } = props;
    return (
        <ul className="task-list">
            {children}
        </ul>
    );
}
export default TaskList;