var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/src',
    paths: {
        'sinon': '../node_modules/sinon/pkg/sinon',
        'jquery': '../node_modules/jquery/dist/jquery',
        'underscore': '../node_modules/underscore/underscore',
        'backbone': '../node_modules/backbone/backbone',
        'backbone.localstorage': '../node_modules/backbone.localstorage/backbone.localStorage',
        'namespace' : 'js/namespace',
        'notemodel' : 'js/models/note',
        'notecollection' : 'js/collections/notes',
        'notenav' : 'js/views/noteNav',
        'test' : '../test',
        'app': 'js/app'
    },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
