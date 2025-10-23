import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({toasts, handleDismiss}) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} message={toast.message} id={toast.id} handleDismiss={handleDismiss}/>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
