import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import './add-user.scss';
import { useStore } from '../../../hooks';

export const AddUser: React.FC = observer(() => {
    const { userStore } = useStore();
    const { addUser } = userStore;
    const [newUserName, setNewUserName] = useState('');

    const handleAddUser = () => {
        if (newUserName.trim() !== '') {
            addUser(newUserName.trim());
            setNewUserName('');
        }
    };

    return (
        <div className="add-user-section">
            <input
                type="text"
                placeholder="Enter new user name"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
            />
            <button onClick={handleAddUser}>Add New User</button>
        </div>
    );
});






