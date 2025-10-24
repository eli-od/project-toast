import React from 'react';
import { useEscapeKey } from '../../hooks/use-escape-key';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    setToasts([...toasts, {id: crypto.randomUUID(), variant, message}]);
  }

  function handleDismiss(id) {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  }

  useEscapeKey(() => setToasts([]));

  return (
    <ToastContext.Provider value={{ 
      toasts, 
      createToast,
      handleDismiss,
      VARIANT_OPTIONS
    }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
