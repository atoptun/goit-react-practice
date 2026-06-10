import { useId } from 'react';

/*
Якщо селект використовується поза формою, то ми працюємо 
з ним як з контрольованим елементом:
Зберігаємо поточне значення в стані.
Передаємо значення стану як атрибут value.
Змінюємо стан при події onChange.

Якщо селект є частиною неконтрольованої форми, 
то спочатку ми задаємо йому атрибут name, 
а потім отримуємо значення селекта під час сабміту 
форми через її властивість 
evt.target.elements.selectName.value, 
де selectName - це значення атрибута name.
*/

type LangSwitcherProps = {
  value: string;
  onSelect: (lang: string) => void;
};

export default function LangSwitcher({value, onSelect}: LangSwitcherProps) {
  const selectId = useId();

  return (
    <div>
      <p>
        <label htmlFor={selectId}>Choose language</label>
      </p>
      <select
        id={selectId}
        value={value}
        onChange={evt => onSelect(evt.target.value)}
      >
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
}
