// index.js
const { buildAll, watch } = require('./src/modules/build-md');

function main() {
  console.log('Starting build process...');

  require('./src/docs').buildAll();

  console.log('Build complete!');
}

function watchMode() {
  console.log('Starting watch mode...');

  main();

  require('./src/docs').watch();
}

// Main execution
if (process.argv.includes('--watch')) {
  watchMode();
} else {
  main();
}
