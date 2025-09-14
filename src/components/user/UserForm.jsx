import { Button, Input, notification } from "antd";
import { use, useState } from "react";
import { createUser } from "../../services/api.service";

const UserForm = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = async () => {
        const data = {
            fullName: fullname,
            email: email,
            password: password,
            phone: phoneNumber
        };
        const response = await createUser(data);
        console.log('response create user', response);
        if (response.data && response.data) {
            notification.success({
                message: 'Thông báo',
                description: "Tạo user thành công"
            });
        }
    };

    return (
        <div className="user-form-container">
            <span className="user-form-title">Form thêm mới user</span>
            <div className="user-form-group">
                <span className="user-form-label">Fullname</span>
                <Input
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)} />
            </div>
            <div className="user-form-group">
                <span className="user-form-label">Email</span>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="user-form-group">
                <span className="user-form-label">Password</span>
                <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="user-form-group">
                <span className="user-form-label">Phone Number</span>
                <Input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div>
                <Button
                    onClick={handleSubmit}
                    type="primary">Create User</Button>
            </div>
        </div>
    )
}
export default UserForm;