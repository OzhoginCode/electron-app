import { useState } from 'react';

const NewUserForm = ({ addNewUser }) => {
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewUser({ name, secondName });
    setName('');
    setSecondName('');
  };

  return (
    <form onSubmit={handleSubmit} className="m-3">
      <label htmlFor="name-input">Введите имя</label>
      <input className="form-control w-25" type="text" id="name-input" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="second-name-input">Введите фамилию</label>
      <input className="form-control w-25" type="text" id="second-name-input" value={secondName} onChange={(e) => setSecondName(e.target.value)} />

      <button type="submit" className="btn btn-primary mt-2">Добавить</button>
    </form>
  );
};

export default NewUserForm;
