import { useState, useEffect } from 'react';

import UsersTable from './components/UsersTable';
import NewUserForm from './components/NewUserForm';

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    window.electron.ipcRenderer.invoke('get-users').then(setUsers);
  }, []);

  const addNewUser = (userData) => {
    window.electron.ipcRenderer
      .invoke('add-user', userData)
      .then((newUser) => setUsers([...users, newUser]));
  };

  return (
    <>
      <NewUserForm addNewUser={addNewUser} />
      <UsersTable users={users} />
    </>
  );
};

export default App;
