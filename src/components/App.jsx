import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import SeachBar from './Searchbar/Searchbar';
import fetchImages from 'Services/FetchImages-api';
import Loader from './Loader/Loader';

class App extends Component {
  state = {
    isImageLoaded: false,
    showModal: false,
    hits: [],
    request: '',
    page: 1,
    largeImage: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { request, page } = this.state;

    if (prevState.request !== request || prevState.page !== page) {
      this.setState({ isImageLoaded: true });

      fetchImages(request, page)
        .then(res => {
          console.log(res);

          if (res.total === 0) {
            return toast.warn(`There is no images with ${request}`);
          }
          return this.setState(({ hits }) => {
            return { hits: [...hits, ...res.hits] };
          });
        })
        .catch(err => toast.warn(err))
        .finally(() => this.setState({ isImageLoaded: false }));
    }
  }

  openModal = ({ largeImageURL, tags }) => {
    this.setState({
      showModal: true,
      largeImage: { largeImageURL, tags },
    });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImage: null });
  };

  handleFormSubmit = request => {
    if (request === this.state.request) {
      return toast.info(`You're alredy looking at ${request}`);
    }
    return this.setState({ request, hits: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { isImageLoaded, showModal, hits, largeImage } = this.state;
    return (
      <>
        <div
          style={{
            display: 'flex',
            height: '10vh',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#3f51b5',
          }}
        >
          React-HW-04-Images
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridGap: '16px',
            paddingBottom: '24px',
          }}
        >
          <ToastContainer autoClose={3000} theme="colored" />
          <SeachBar onSubmit={this.handleFormSubmit} />
          <ImageGallery hits={hits} alt={hits.tags} onClick={this.openModal} />
          {isImageLoaded && <Loader />}
          {showModal && (
            <Modal onClick={this.closeModal}>
              <img src={largeImage.largeImageURL} alt={largeImage.tags} />
            </Modal>
          )}
          {hits.length > 0 && <Button onClick={this.handleLoadMore} />}
        </div>
      </>
    );
  }
}

export default App;
