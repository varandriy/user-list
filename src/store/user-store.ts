import { types, flow, Instance } from 'mobx-state-tree';
import { AxiosResponse } from 'axios';
import { UserType, UserModel } from '../models';
import { httpClient } from '../utils';

const UserStore = types
    .model('userStore', {
        users: types.array(UserModel),
        loading: false,
        error: '',
    })
    .actions(self => ({
        fetchUsers: flow(function* () {
            try {
                self.loading = true;
                const response: AxiosResponse<UserType[]> = yield httpClient.get<UserType[]>(
                    'users'
                );
                self.users.replace(response.data.map(userData => UserModel.create(userData)));
            } catch (error) {
                self.error = 'Error fetching users';
            } finally {
                self.loading = false;
            }
        }),
        addUser(userName: string) {
            const newUser: UserType = UserModel.create({
                id: Math.max(...self.users.map(u => u.id)) + 1, //unique IDs
                name: userName,
                disabled: false,
            });
            self.users.push(newUser);
        },
        deleteUser(userId: number) {
            self.users.replace(self.users.filter((user) => {
                return user.id !== userId
            }));
        },
        toggleDisableUser(userId: number) {
            const user = self.users.find(user => user.id === userId);
            if (user) {
                user.disabled = !user.disabled;
            }
        },
        editUserName(userName: string, id: number) {
            self.users.replace(self.users.map((user) => {
                return user.id === id ? {
                    ...user,
                    name: userName
                } : user
            }));
        },
    }));

export default UserStore;

export type UserStoreType = Instance<typeof UserStore>;
