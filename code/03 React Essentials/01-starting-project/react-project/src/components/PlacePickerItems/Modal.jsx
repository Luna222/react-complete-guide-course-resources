import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from '../../pages/PlacePicker/PlacePicker.module.css';

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      },
    };
  });

  return createPortal(
    <dialog className={styles.modal} ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('placePicker-modal')
  );
});

export default Modal;
