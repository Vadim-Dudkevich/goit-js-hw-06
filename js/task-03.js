const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryEl = document.querySelector('.gallery');
// galleryEl.style.display = 'grid';
// galleryEl.style.gridTemplateColumns = '500px 500px 500px';
// galleryEl.style.listStyleType = 'none';

// const imagesEl = images
//   .map(image => {
//     return galleryEl.insertAdjacentHTML(
//       'afterbegin',
//       `<li><img src = ${image.url} alt = ${image.alt} width = 450></img></li>`,
//     );
//   })
//   .join('');

// galleryEl.append(imagesEl);

const galleryEl = document.querySelector('.gallery');

galleryEl.style.display = 'grid';
galleryEl.style.gridTemplateColumns = '500px 500px 500px';
galleryEl.style.listStyleType = 'none';

const markupOnPage = images
  .map(
    ({ url, alt }) =>
      `<li class="item"><img src="${url}" alt="${alt}" width="450"></li>`,
  )
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', markupOnPage);
