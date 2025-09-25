import UserForm from "../components/user/UserForm";
import UserTable from "../components/user/UserTable";

const UsersPage = () => {
    return (
        <div>
            <div>
                <UserForm />
            </div>
            <div>
                <h3>Danh sách user</h3>
                <UserTable />
            </div>
        </div>
    )
}
export default UsersPage;
