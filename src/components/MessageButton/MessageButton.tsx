import styles from "./MessageButton.module.css";

interface MessageButtonProps {
  message: string;
  children?: React.ReactNode;
}

export default function MessageButton({ message, children }: MessageButtonProps) {
  const handleClick = () => { 
    alert(message);
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
}
