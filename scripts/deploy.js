require('dotenv').config();
const git = require('simple-git/promise');

async function run() {
  return await git()
    .commit('Automated commit', '-a')
    .push('origin', 'master');
}

run().then((err, result) => {
  console.log('Commit complete');
});
