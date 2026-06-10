import clsx from "clsx";
import { useState } from "react";

import LoginForm, { type LoginUserData } from '../components/LoginForm/LoginForm'
import SearchBar from "@/components/SearchBar/SearchBar";
import LangSwitcher from "@/components/LangSwitcher/LangSwitcher";
import Cofee from "@/components/Cofee/Cofee";
import Term from "@/components/Term/Term";
import LoginForm2 from "@/components/LoginForm2/LoginForm2";

export default function Lesson_05({ hidden = false }) {
  const [lang, setLang] = useState('uk')

  const handleLogin = (userData: LoginUserData) => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };


  return (
    <div className={clsx('lesson-05', { hidden: hidden })}>
      <div>Lesson_05</div>
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
