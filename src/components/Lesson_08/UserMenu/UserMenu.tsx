import { useUser } from '../userContext';

function UserMenu() {
  const { user, isLogedIn, logIn, logOut } = useUser() || {};

  return (
    <div>
      {isLogedIn ? (
        <div>
          <p>Welcome, {user?.name}!</p>
          <button onClick={logOut}>Logout</button>
        </div>
      ) : (
        <button onClick={logIn}>Login</button>
      )}
    </div>
  );
}
export default UserMenu;
