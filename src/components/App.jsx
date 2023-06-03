import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import SeachBar from './Searchbar/Searchbar';
import fetchImages from 'Services/FetchImages-api';
import Loader from './Loader/Loader';

function App() {
  const [isImageLoaded, setIsImageLoaded] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [hits, setHits] = useState([]);
  const [request, setRequest] = useState('');
  const [page, setPage] = useState(1);
  const [largeImage, setLargeImage] = useState(null);

  useEffect(() => {
    if (!request) {
      return;
    }

    setIsImageLoaded(true);

    fetchImages(request, page)
      .then(res => {
        if (res.total === 0) {
          return toast.warn(`There is no images with ${request}`);
        }
        setHits([...hits, ...res.hits]);
      })
      .catch(err => toast.warn(err))
      .finally(() => setIsImageLoaded(false));
  }, [page, request]);

  const openModal = ({ largeImageURL, tags }) => {
    setShowModal(true);
    setLargeImage({ largeImageURL, tags });
  };

  const closeModal = () => {
    setShowModal(false);
    setLargeImage(null);
  };

  const handleFormSubmit = newRequest => {
    if (newRequest === request) {
      return toast.info(`You're alredy looking at ${request}`);
    }

    setRequest(newRequest);
    setHits([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

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
        <SeachBar onSubmit={handleFormSubmit} />
        <ImageGallery hits={hits} alt={hits.tags} onClick={openModal} />
        {isImageLoaded && <Loader />}
        {showModal && (
          <Modal onClick={closeModal}>
            <img src={largeImage.largeImageURL} alt={largeImage.tags} />
          </Modal>
        )}
        {hits.length > 0 && <Button onClick={handleLoadMore} />}
      </div>
    </>
  );
}

export default App;
