'use strict'

module.exports = {
  // tels fuge to proxy connections to docker. Allows
  // you to specifiy localhost in your microservices.
  proxy: 'none',

  // Run docker containers if an image is specified.
  runDocker: true,

  // Log to file, not console logs are found in ./logs
  tail: true,

  // Restart microservices if they explode, lets say no.
  restartOnError: false,

  // Ignore all this junk
  exclude: [
    '**/node_modules',
    '**/data',
    '**/.git',
    '**/CURRENT',
    '**/LOG*',
    '**/MANIFEST*',
    '**/*.ldb',
    '**/*.log'
  ],

  // We override the docker files here so we can keep them geared towards release.
  // Notice we don't use npm to start, this is because npm doesn't like when we
  // want to be able to run multiple copies of our services, so we stick to the
  // command we would have called via npm run start.
  overrides: {}
}