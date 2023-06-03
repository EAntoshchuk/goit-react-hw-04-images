import React, { useState } from 'react';
import css from './Searchbar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SeachBar({ onSubmit }) {
  const [request, setRequest] = useState('');

  const handleRequestChange = event => {
    setRequest(event.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (request.trim() === '') {
      return toast.warn('Enter search request please');
    }

    onSubmit(request);
    setRequest('');
  };

  return (
    <header className={css.searchbar}>
      <form onSubmit={handleSubmit} className={css.search_form}>
        <input
          className={css.search_form__input}
          name="imageSearch"
          value={request}
          onChange={handleRequestChange}
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
