const element = document.querySelector('[data-gallery]');
const dir = element.dataset.gallery;
const get = (f) => fetch(`${dir}/${f}`).then(r => r.json());
const files = await get('images.json');
// alts.json só nas pastas com data-alts (livros); fotos ficam decorativas (alt="")
const alts = element.hasAttribute('data-alts') ? await get('alts.json') : {};

element.append(...files.map((file, i) =>
  Object.assign(new Image(), {
    src: `${dir}/${file}`,
    alt: alts[file.replace(/\.\w+$/, '')] ?? '',
    loading: i < 6 ? 'eager' : 'lazy',
  })
));
