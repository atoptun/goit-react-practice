import clsx from 'clsx';
import styles from './Button.module.css';

// interface ButtonProps {
//   selected?: boolean;
//   type?: 'button' | 'submit' | 'reset';
//   children: React.ReactNode;
// }

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  selected?: boolean;
  // type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

function Button({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.btn, {
        [styles.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
}
export default Button;
