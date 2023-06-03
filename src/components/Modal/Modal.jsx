import { useEffect, useCallback } from 'react';
import Proptypes from 'prop-types';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal_root');

export default function Modal({ onClick, children }) {
  const handleModal = useCallback(
    event => {
      if (event.currentTarget === event.target || event.code === 'Escape') {
        onClick();
      }
    },
    [onClick]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleModal);
    return () => {
      window.removeEventListener('keydown', handleModal);
    };
  }, [handleModal]);

  return createPortal(
    <div className={css.overlay} onClick={handleModal}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClick: Proptypes.func.isRequired,
};
