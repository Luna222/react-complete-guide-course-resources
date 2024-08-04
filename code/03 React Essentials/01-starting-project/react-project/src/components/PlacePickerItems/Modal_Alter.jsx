import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import styles from '../../pages/PlacePicker/PlacePicker.module.css';

const Modal_Alter = function ({ open, children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    //🔖 ✨showModal, ✨close Methods are DOM APIs (Browser APIs)
    //--> show the backdrop by calling 'showModal' method
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);

  return createPortal(
    //❗️open is a boolean value, this dialog element with 'open' attribute has no backdrop
    <dialog className={styles.modal} ref={dialog} onClose={onClose}>
      {/* 👉 only render <DeleteConfirmation/> if 'open' Prop is true */}
      {open ? children : null}
    </dialog>,
    document.getElementById('placePicker-modal')
  );
};

export default Modal_Alter;
