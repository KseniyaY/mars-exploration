// Karma configuration
// Generated on Tue Jul 28 2020 17:44:27 GMT-0400 (EDT)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'src/app/test',
    // list of files / patterns to exclude
    exclude: [
    ],
    files: [
      '*spec.js'
    ],
    /*parameters:
    watched: if autoWatch is true all files that have watched set to true will be watched for changes
    served: should the files be served by Karma's webserver?
    included: should the files be included in the browser using <script> tag?
    nocache: should the files be served from disk on each request by Karma's webserver? */
    /*assets:
    {pattern: '*.html', watched:true, served:true, included:false}
    {pattern: 'images/*', watched:false, served:true, included:false} */


    //executes the tests whenever one of the watched files changes
    autoWatch: true,
    //if true, Karma will run tests and then exit browser
    singleRun: false,
    //if true, Karma fails on running empty test-suites
    failOnEmptyTestSuite: false,
    //reduce the kind of information passed to the bash
    logLevel: config.LOG_INFO, //config.LOG_DISABLE, config.LOG_ERROR, config.LOG_INFO, config.LOG_DEBUG

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['ChromeHeadless'],
    // list of files / patterns to load in the browser

    //address that the server will listen on, '0.0.0.0' is default
    listenAddress: '0.0.0.0',
    //hostname to be used when capturing browsers, 'localhost' is default
    hostname: 'localhost',
    //the port where the web server will be listening, 9876 is default
    port: 9876,
    //when a browser crashes, karma will try to relaunch, 2 is default
    retryLimit: 0,
    //how long does Karma wait for a browser to reconnect, 2000 is default
    browserDisconnectTimeout: 5000,
    //how long will Karma wait for a message from a browser before disconnecting from it, 10000 is default
    browserNoActivityTimeout: 10000,
    //timeout for capturing a browser, 60000 is default
    captureTimeout: 60000,

    client: {
      //capture all console output and pipe it to the terminal, true is default
      captureConsole: false,
      //if true, Karma clears the context window upon the completion of running the tests, true is default
      clearContext: false,
      //run the tests on the same window as the client, without using iframe or a new window, false is default
      runInParent: false,
      //true: runs the tests inside an iFrame; false: runs the tests in a new window, true is default
      useIframe: true,
      jasmine: {
        //tells jasmine to run specs in semi random order, false is default
        random: false,
        spec_dir: "test",
        spec_files: [
          "**/*spec.js"
        ]
      }
    },

    /* karma-webpack config
    pass your webpack configuration for karma*/
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/i,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      //add webpack as preprocessor to support require() in test-suites .js files
      '*.spec.js': ['webpack']
    },
    webpackMiddleware: {
      //turn off webpack bash output when running the tests
      noInfo: true,
      stats: 'errors-only'
    },

    /*karma-mocha-reporter config*/
    mochaReporter: {
      output: 'noFailures'  //full, autowatch, minimal
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}



