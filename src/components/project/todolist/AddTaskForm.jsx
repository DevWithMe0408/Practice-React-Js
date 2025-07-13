
const AddTaskForm = () => {
    return (
        <form className="add-task-form" >
            <input
                type="text"
                placeholder="Enter your task"
            />
            <button type="submit">Add</button>
        </form>
    );
}
export default AddTaskForm;