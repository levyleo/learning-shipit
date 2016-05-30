var pm = require('shipit-pm');
var deploy = require('shipit-deploy');
var cnpm = require('shipit-cnpm');
module.exports = function(shipit) {
  deploy(shipit);
  cnpm(shipit);
  pm(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/deploy/node-example',
      deployTo: '/home/levyleo/work/node-example',
      repositoryUrl: 'https://github.com/levyleo/node-example.git',
      ignores: ['.git'],
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true,
      cnpm: {
        flags: '--production'
      },
      pm: {
        production: '/home/levyleo/work/node-example/current/pm2/production.json',
        development: '/home/levyleo/work/node-example/current/pm2/development.json'
      }
    },
    development: {
      servers: ['work@xxx']
    },
    production: {
      servers: ['work@xxx']
    }
  });
}
