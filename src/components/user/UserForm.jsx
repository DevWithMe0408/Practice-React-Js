import { Button, Input, notification, Modal } from "antd";
import { use, useState } from "react";
import { createUserApi } from "../../services/api.service";

const UserForm = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = async () => {
        const data = {
            fullName: fullname,
            email: email,
            password: password,
            phone: phoneNumber
        };
        const response = await createUserApi(data);
        console.log('response create user', response);
        if (response.data && response.data) {
            notification.success({
                message: 'Thông báo',
                description: "Tạo user thành công"
            });
            setIsModalOpen(false);
        } else {
            notification.error({
                message: 'Thông báo',
                description: JSON.stringify(response.message)
            });
        }
    };

    return (
        <>
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
                Create User
            </Button>

            <Modal
                title="Form thêm mới user"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleSubmit}
                maskClosable={false}
                onCancel={() => setIsModalOpen(false)}
                okText="Create User"
            >
                <div className="user-form-container">
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
                </div>
            </Modal>
        </>

    )
}
export default UserForm;