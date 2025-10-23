import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({variant, message, popToast, setPopToast}) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    if (popToast) {
      setToasts([...toasts, {id: crypto.randomUUID(), variant, message}]);

      setPopToast(false);
    }
  }, [message, popToast, toasts, variant, setPopToast]);

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast variant={toast.variant} message={toast.message} id={toast.id} setToasts={setToasts} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
