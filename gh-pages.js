// const ghpages = require('gh-pages');
import ghpages from 'gh-pages';

ghpages.publish(
  'build', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/aravindhnivas/aravindhnivas.github.io.git', // Update to point to your repository
    user: {
      name: 'aravindhnivas', // update to use your name
      email: 'aravindhnivas28@gmail.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);