import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';
import { RootStoreType } from '../store/root-store';

type StoreType = {
    userStore: RootStoreType['userStore'];
}

export const useStore = (): StoreType => {
    const store = useContext(MobXProviderContext);
    if (!store) {
        throw new Error('Store is null. Make sure you have wrapped your components with <Provider>');
    }
    return { userStore: store.userStore };
};


