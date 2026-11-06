const element = document.querySelector('[data-gallery]');
const dir = element.dataset.gallery;
const files = await (await fetch(`${dir}/images.json`)).json();

element.append(...files.map(file =>
  Object.assign(new Image(), { src: `${dir}/${file}`, alt: '', loading: 'lazy' })
));