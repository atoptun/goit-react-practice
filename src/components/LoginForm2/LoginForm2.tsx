import { useState } from 'react';

export default function LoginForm2() {
  const [values, setValues] = useState({
    login: '',
    password: '',
  });

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSumit = (evt: React.SubmitEvent<HTMLFormElement>) => {
    evt.preventDefault();

    console.log(values);

    setValues({
      login: '',
      password: '',
    });
  };

  return (
    <>
      <h2>Login form 2</h2>
      <form onSubmit={handleSumit}>
        <input
          type="text"
          name="login"
          value={values.login}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
