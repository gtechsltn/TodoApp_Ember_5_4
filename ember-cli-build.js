'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults);

  app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css');
  app.import('node_modules/bootstrap/fonts/glyphicons-halflings-regular.eot', {
    destDir: 'fonts',
  });
  app.import('node_modules/bootstrap/fonts/glyphicons-halflings-regular.svg', {
    destDir: 'fonts',
  });
  app.import('node_modules/bootstrap/fonts/glyphicons-halflings-regular.ttf', {
    destDir: 'fonts',
  });
  app.import(
    'node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff2',
    {
      destDir: 'fonts',
    },
  );
  app.import('node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts',
  });
  app.import('node_modules/fontawesome-4.7/css/font-awesome.min.css', {
    destDir: 'fonts',
  });
  app.import('node_modules/fontawesome-4.7/fonts/FontAwesome.otf', {
    destDir: 'fonts',
  });
  app.import('node_modules/fontawesome-4.7/fonts/fontawesome-webfont.eot', {
    destDir: 'fonts',
  });
  app.import('node_modules/fontawesome-4.7/fonts/fontawesome-webfont.svg', {
    destDir: 'fonts',
  });
  app.import('node_modules/fontawesome-4.7/fonts/fontawesome-webfont.ttf', {
    destDir: 'fonts',
  });
  app.import('node_modules/fontawesome-4.7/fonts/fontawesome-webfont.woff', {
    destDir: 'fonts',
  });
  app.import('node_modules/fontawesome-4.7/fonts/fontawesome-webfont.woff2', {
    destDir: 'fonts',
  });
  return app.toTree();
};
