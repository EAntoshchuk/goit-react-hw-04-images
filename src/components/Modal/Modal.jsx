import { Component } from 'react';
import Proptypes from 'prop-types';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal_root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('modal componenDidMount');
    window.addEventListener('keydown', this.handleModal);
  }

  componentWillUnmount() {
    console.log('modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleModal);
  }

  // handleKeyDown = event => {
  //   if (event.code === 'Escape') {
  //     //   console.log('escape pushed');
  //     this.props.onClose();
  //   }
  // };

  handleModal = event => {
    // console.log('currentTarget', event.currentTarget);
    // console.log('target', event.target);
    if (event.currentTarget === event.target || event.code === 'Escape') {
      this.props.onClick();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.handleModal}>
        <div className={css.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onClick: Proptypes.func.isRequired,
};
