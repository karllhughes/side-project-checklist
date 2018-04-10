require('dotenv').config();
const git = require('simple-git/promise');

async function run() {
  await git().commit('Automated commit', '-a');
  return await git().push('origin', 'master');
}

run().then((err, result) => {
  console.log('Commit complete');
});
