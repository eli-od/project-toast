import React from 'react';

import Toast from '../Toast';
import { ToastContext,  } from '../ToastProvider/ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}
    role={"region"} 
    aria-live={"polite"} 
    aria-label={`Notification`}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} message={toast.message} id={toast.id}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
