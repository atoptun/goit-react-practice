import { useId } from 'react';

export type LoginUserData = { login: string; password: string };
export type LoginCallback = (userData: LoginUserData) => void;

type LoginFormProps = {
  onLogin: LoginCallback;
};

export default function LoginForm({ onLogin }: LoginFormProps) {
  const loginId = useId();
  const passwordId = useId();

  const handleSubmit = (evt: React.SubmitEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target;
    const formData = new FormData(form);
    const login = formData.get('login') as string;
    const password = formData.get('password') as string;

    onLogin({ login: login, password: password });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={loginId}>Login</label>
      <input type="text" name="login" id={loginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />

      <button type="submit">Login</button>
    </form>
  );
}
