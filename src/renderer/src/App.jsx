import { useState, useEffect } from 'react';
import UsersTable from './components/UsersTable';
import NewUserButton from './components/NewUserButton';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    window.electron.ipcRenderer.invoke('get-users').then(setUsers);
  }, []);

  useEffect(() => {
    const userAddedListener = (_event, newUser) => {
      setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    window.electron.ipcRenderer.on('user-added', userAddedListener);

    return () => {
      window.electron.ipcRenderer.removeListener('user-added', userAddedListener);
    };
  }, []);

  return (
    <>
      <NewUserButton />
      <UsersTable users={users} />
    </>
  );
};

export default App;
