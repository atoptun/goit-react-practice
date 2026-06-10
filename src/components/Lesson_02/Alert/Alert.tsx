import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { IoMdAlert } from 'react-icons/io';

import styles from './Alert.module.css';

type AlertProps = PropsWithChildren<{
  level?: 'info' | 'warning' | 'error' | 'success';
  outlined?: boolean;
  elevated?: boolean;
}>;

export const Alert = ({
  level = 'info',
  outlined,
  elevated,
  children,
}: AlertProps) => {
  return (
    <div
      className={clsx(
        styles.alert,
        styles[level],
        // outlined && styles["is-outlined"],
        // elevated && styles["is-elevated"],
        {
          [styles.isOutlined]: outlined,
          [styles.isElevated]: elevated,
        }
      )}
    >
      <IoMdAlert className={styles.icon} size={24} />
      {children}
    </div>
  );
};
