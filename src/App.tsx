import { MobXProviderContext } from 'mobx-react';
import UserStore from './store/user-store';
import { RootStore } from './store/root-store';
import { UsersPage } from './pages';


const rootStore = RootStore.create({
  userStore: UserStore.create(),
});

function App() {
  return (
    <MobXProviderContext.Provider value={rootStore}>
      <UsersPage />
    </MobXProviderContext.Provider>
  );
}

export default App;
