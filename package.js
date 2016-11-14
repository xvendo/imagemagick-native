Package.describe({
  name: 'xvendo:imagemagick-native',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Wrapper for imagemagick-native node module',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/xvendo/imagemagick-native.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "sharp": "1.9.3"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('imagemagick-native.js', 'server');
  api.export('imagemagick');
});