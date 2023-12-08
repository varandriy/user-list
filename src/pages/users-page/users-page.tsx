import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks';
import './users-page.scss';
import { UserItem } from '../components/user-item/user-item';
import { AddUser } from '../components/add-user/add-user';

export const UsersPage: React.FC = observer(() => {
  const { userStore } = useStore();
  const { loading, users } = userStore;

  useEffect(() => {
    userStore.fetchUsers();
  }, [userStore]);


  return (
    <div className="container">
      {loading && <p>Loading...</p>}
      <AddUser />

      <div className="user-list">
        {users.map((user) => (
          <UserItem user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
});

export default UsersPage;
