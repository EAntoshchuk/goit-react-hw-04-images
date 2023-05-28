import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class SeachBar extends Component {
  state = {
    request: '',
  };

  handleRequestChange = event => {
    this.setState({ request: event.currentTarget.value.toLowerCase().trim() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.request.trim() === '') {
      return toast.warn('Enter search request please');
    }

    this.props.onSubmit(this.state.request);
    this.setState({ request: '' });
  };

  render() {
    const { request } = this.state;
    return (
      <header className={css.searchbar}>
        <form onSubmit={this.handleSubmit} className={css.search_form}>
          <input
            className={css.search_form__input}
            name="imageSearch"
            value={request}
            onChange={this.handleRequestChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={css.search_form__button}>
            <span className={css.search_form__button_label}></span>
          </button>
        </form>
      </header>
    );
  }
}
