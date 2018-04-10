require('dotenv').config();
const git = require('simple-git/promise');

async function run() {
  return await git().commit('Automated commit', '-a');
}

run().then((err, result) => {
  console.log('Commit complete');
  console.log(result);
});
