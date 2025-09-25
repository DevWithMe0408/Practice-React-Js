import { Space, Table, Tag } from 'antd';
import { getAllUsersApi } from "../../services/api.service";
import { useEffect, useState } from "react";

const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([]);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            // key: 'name',
            // render: text => <a>{text}</a>,
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            // key: 'age',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            // key: 'address',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            // key: 'address',
        }
        // {
        //     title: 'Tags',
        //     key: 'tags',
        //     dataIndex: 'tags',
        //     render: (_, { tags }) => (
        //         <>
        //             {tags.map(tag => {
        //                 let color = tag.length > 5 ? 'geekblue' : 'green';
        //                 if (tag === 'loser') {
        //                     color = 'volcano';
        //                 }
        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </>
        //     ),
        // },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_, record) => (
        //         <Space size="middle">
        //             <a>Invite {record.name}</a>
        //             <a>Delete</a>
        //         </Space>
        //     ),
        // },
    ];

    const fetchAllUsers = async () => {
        const response = await getAllUsersApi();
        console.log('response get all users', response.data);
        setDataUsers(response.data);
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <Table
            columns={columns}
            dataSource={dataUsers}
            rowKey={"_id"} />
    )
}
export default UserTable;