rm -rf node_modules
npm i
npm run build
rm -rf node_modules
npm i --only=prod --ignore-scripts
rm -rf *.zip
zip -r api-producer.zip node_modules package.json package-lock.json dist
rm -rf node_modules
npm i
