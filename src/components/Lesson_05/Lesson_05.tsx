import clsx from 'clsx';
import { useState } from 'react';

import LoginForm, { type LoginUserData } from './LoginForm/LoginForm';
import SearchBar from '@/components/Lesson_05/SearchBar/SearchBar';
import LangSwitcher from '@/components/Lesson_05/LangSwitcher/LangSwitcher';
import Cofee from '@/components/Lesson_05/Cofee/Cofee';
import Term from '@/components/Lesson_05/Term/Term';
import LoginForm2 from '@/components/Lesson_05/LoginForm2/LoginForm2';

export default function Lesson_05({ hidden = false }) {
  const [lang, setLang] = useState('uk');

  const handleLogin = (userData: LoginUserData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  return (
    <div className={clsx('lesson-05', { hidden: hidden })}>
      <h1>Lesson_05</h1>
      <h2>Please login to your account!</h2>
      <LoginForm onLogin={handleLogin} />
      <SearchBar />
      <LangSwitcher value={lang} onSelect={setLang} />
      <Cofee />
      <Term />
      <LoginForm2 />
    </div>
  );
}
