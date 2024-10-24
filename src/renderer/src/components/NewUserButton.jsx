const NewUserButton = () => {
  const handleClick = () => {
    window.electron.ipcRenderer.invoke('open-new-user-window');
  };

  return (
    <button className="btn btn-primary m-3" onClick={handleClick} type="button">Добавить нового пользователя</button>
  );
};

export default NewUserButton;
