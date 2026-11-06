for d in gallery books; do
  node -e "console.log(JSON.stringify(require('fs').readdirSync(process.argv[1]).filter(f => /\.(png|jpe?g|webp)$/i.test(f))))" assets/$d > assets/$d/images.json
done