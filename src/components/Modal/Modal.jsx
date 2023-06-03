import { useEffect } from 'react';
import Proptypes from 'prop-types';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal_root');

export default function Modal() {
  useEffect(() => {
    window.addEventListener('keydown', handleModal);
    window.removeEventListener('keydown', handleModal);
  });

  // const componentDidMount = e => {
  //   console.log('modal componenDidMount');
  //   window.addEventListener('keydown', this.handleModal);
  // };

  // const componentWillUnmount = e => {
  //   console.log('modal componentWillUnmount');

  //   window.removeEventListener('keydown', this.handleModal);
  // };

  const handleModal = event => {
    if (event.currentTarget === event.target || event.code === 'Escape') {
      this.props.onClick();
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
