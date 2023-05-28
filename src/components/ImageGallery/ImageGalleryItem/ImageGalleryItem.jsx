import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  webformatURL,
  tags,
  largeImageURL,
  onClick,
}) {
  return (
    <li
      className={css.imageGalleryItem}
      onClick={() => onClick({ largeImageURL, tags })}
    >
      <img
        className={css.imageGalleryItem_image}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  // id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
