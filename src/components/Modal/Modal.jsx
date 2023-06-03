import { useEffect } from 'react';
import Proptypes from 'prop-types';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal_root');

export default function Modal({ onClick }) {
  useEffect(() => {
    window.addEventListener('keydown', handleModal);
    window.removeEventListener('keydown', handleModal);
  });

  const handleModal = event => {
    if (event.currentTarget === event.target || event.code === 'Escape') {
      onClick();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleModal}>
      <div className={css.modal}>{this.props.children}</div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClick: Proptypes.func.isRequired,
};
