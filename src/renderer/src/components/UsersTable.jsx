const UserTr = ({ user }) => (
  <tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.secondName}</td>
  </tr>
);

const UsersTable = ({ users }) => (
  <table className="table m-3 w-75">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Имя</th>
        <th scope="col">Фамилия</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => <UserTr key={user.id} user={user} />)}
    </tbody>
  </table>
);

export default UsersTable;
