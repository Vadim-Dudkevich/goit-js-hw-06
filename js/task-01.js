const categoryEl = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ${categoryEl.length}`);

categoryEl.forEach(element => {
  const categoryElTitle = element.querySelector('h2');
  const categoryElLi = element.querySelectorAll('li');
  console.log(`Category: ${categoryElTitle.textContent}`);
  console.log(`categories: ${categoryElLi.length}`);
});
