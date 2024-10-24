import NewUserForm from '../components/NewUserForm';

const NewUserPage = () => {
  const addNewUser = (userData) => {
    window.electron.ipcRenderer.invoke('add-user', userData);
  };

  return <NewUserForm addNewUser={addNewUser} />;
};

export default NewUserPage;
