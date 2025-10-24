import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf/ToastShelf';
import { ToastContext,  } from '../ToastProvider/ToastProvider';

import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  const { 
      createToast,
      VARIANT_OPTIONS,
      toasts,
      handleDismiss
    } = React.useContext(ToastContext);
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [message, setMessage] = React.useState('');

  function handleToastCreation(event) {
    event.preventDefault();
    createToast(message, variant);
    setMessage('');
  }

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      if (toasts.length > 0) {
        const latestToast = toasts[toasts.length - 1];
        handleDismiss(latestToast.id);
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf/>

      <form className={styles.controlsWrapper} onKeyDown={handleKeyDown}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message"
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {/* TODO Other Variant radio buttons here */}
            {VARIANT_OPTIONS.map(
              (variantOption) => (
                <label htmlFor={`variant-${variantOption}`} key={variantOption}>
                  <input
                    id={`variant-${variantOption}`}
                    type="radio"
                    name="variant"
                    value={variantOption}
                    checked={variant === variantOption}
                    onChange={() => setVariant(variantOption)}
                  />
                  {variantOption}
                </label>
              )
            )}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={handleToastCreation}>
              Pop Toast!
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
