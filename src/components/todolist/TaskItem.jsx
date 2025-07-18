const DeleteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" /><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" /></svg>;
const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.5-.5H2a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5H3v-1h-.5a.5.5 0 0 1-.5-.5V6H1.5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h2.536l6.852 6.852a.5.5 0 0 1-.707.707L3.5 5.707V13.5a.5.5 0 0 1-.5.5z" /></svg>;

const TaskItem = (props) => {
    const { task, deleteById } = props;
    return (
        <li className="task-item">
            <span className="task-text">{task.text}</span>
            <div className="task-actions">
                <button className="action-btn" aria-label="Delete task" onClick={() => deleteById(task.id)}>
                    <DeleteIcon />
                </button>
                <button className="action-btn" aria-label="Edit task">
                    <EditIcon />
                </button>
            </div>
        </li>
    )
}
export default TaskItem; 