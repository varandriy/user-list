import { observer } from 'mobx-react-lite'
import { Form, IF } from '../../../shared'
import './user-item.scss'
import { useStore } from '../../../hooks';
import { UserType } from '../../../models';
import { useState } from 'react';

type Props = {
    user: UserType;
}

export const UserItem: React.FC<Props> = observer(({ user }) => {
    const { userStore } = useStore();
    const { deleteUser, toggleDisableUser, editUserName } = userStore;

    const [isEdit, setIsEdit] = useState(false);
    const [newUserName, setNewUserName] = useState(user.name);

    const handleDeleteUser = (userId: number) => {
        deleteUser(userId);
    };

    const handleToggleBlockUser = (userId: number) => {
        toggleDisableUser(userId);
        setIsEdit(false)
        setNewUserName(user.name)
    };

    const handleEditClick = (userId: number) => {
        if (isEdit) {
            editUserName(newUserName, userId);
            setIsEdit(false)
        } else {
            setIsEdit(true)
        }
    }

    const showName = !isEdit || user.disabled

    return (
        <div className={`user-item ${user.disabled && 'user-item--disabled'} `}>
            <div className='user-name-container'>
                <IF condition={showName}>
                    <div className='user-name'>{user.name}</div>
                </IF>

                <IF condition={!showName}>
                    <Form.Input
                        disabled={!isEdit}
                        placeholder="Enter new user name"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)} />
                </IF>
            </div>


            <div className='user-actions'>
                <Form.Button variant='secondary' onClick={() => handleToggleBlockUser(user.id)}>
                    {user.disabled ? 'Unblock' : 'Block'}
                </Form.Button >

                <IF condition={!user.disabled}>
                    <Form.Button variant={'primary'} onClick={() => handleEditClick(user.id)}>
                        {!isEdit ? 'Edit' : 'Save'}
                    </Form.Button >
                </IF>

                <IF condition={!user.disabled}>
                    <Form.Button variant={'decline'} onClick={() => handleDeleteUser(user.id)}>
                        Delete
                    </Form.Button >
                </IF>
            </div>
        </div>
    )
})

