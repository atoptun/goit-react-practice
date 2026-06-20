import { useCounterContext } from '../counterContext.ts';
import UserMenu from '../UserMenu/UserMenu.tsx';
import { useUser } from '../userContext';

function ThirdLevel() {
  const context = useCounterContext();
  const { user } = useUser() || {};

  return (
    <div style={{ marginLeft: 20 }}>
      ThirdLevel
      <br />
      counter context counter is: {context.counter}
      <br />
      User: {user ? `${user.name}, ${user.age}` : 'No user'}
      <br />
      UserMenu:
      <UserMenu />
    </div>
  );
}
export default ThirdLevel;
