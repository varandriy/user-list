import { Instance, types } from 'mobx-state-tree';
import UserStore from './user-store';

export const RootStore = types.model('RootStore', {
    userStore: UserStore,
});

export type RootStoreType = Instance<typeof RootStore>;
