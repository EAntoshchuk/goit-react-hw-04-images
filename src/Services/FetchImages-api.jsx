const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35004383-5cd2ee797d433f0b9be31b1f4';
const image_type = 'photo';
const orientation = 'horizontal';
const per_page = '12';

export default function fetchImages(request, page) {
  return fetch(
    `${BASE_URL}?q=${request}&page=${page}&key=${API_KEY}&image_type=${image_type}&orientation=${orientation}&per_page=${per_page}`
  ).then(res => {
    if (!res.ok) {
      throw new Error('Something went wrong  🤔 ');
    }
    return res.json();
  });
}
