// Karma configuration
// Generated on Thu Mar 05 2015 15:57:25 GMT+0100 (Mitteleuropäische Zeit)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'requirejs'],

        // list of files / patterns to load in the browser
        files: [
            'test/test-main.js',
            {pattern: 'node_modules/sinon/pkg/sinon.js', included: false},
            {pattern: 'node_modules/jquery/dist/jquery.js', included: false},
            {pattern: 'node_modules/underscore/underscore.js', included: false},
            {pattern: 'node_modules/backbone/backbone.js', included: false},
            {pattern: 'node_modules/backbone.localstorage/backbone.localStorage.js', included: false},
            {pattern: 'src/js/**/*.js', included: false},
            {pattern: 'test/js/**/*.js', included: false}
        ],

        // list of files to exclude
        exclude: [
            'src/main.js'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/js/**/*.js': ['coverage']
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage'],

        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
