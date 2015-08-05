/*
 * grunt-stonejs
 * https://github.com/flozz/grunt-stonejs
 *
 * Copyright (c) 2015 Fabien LOISON <http://www.flozz.fr/>
 * Licensed under the BSD-3-Clause license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    stonejs: {
      default: {
        // Source files (js/html)
        src: ['test/fixtures/gettext.js', 'test/fixtures/syntax-error.js'],
        // Translation template (.pot)
        pot: 'tmp/catalog.pot',
        // Localised translation files (.po)
        po: 'tmp/*.po',
        // Output folder (or file if the `merge` option is set to true)
        output: 'tmp/catalog.json',
        options: {
          // Do not output logs if setted to `true` (default: false)
          quiet: false,
          // List of the translation functions (default: ['_', 'gettext', 'lazyGettext'])
          functions: ['_', 'gettext', 'lazyGettext'],
          // Merge all locales into a single file if setted to true (default: false)
          merge: true,
          // Output format (js or json, default: 'json')
          format: 'json'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    },

    jscs: {
      src: ['task/*.js', 'Gruntfile.js'],
      options: {
        config: '.jscsrc'
      }
    },

    copy: {
      test: {
        files: [
          {expand: true, flatten: true, src: ['test/fixtures/*.po'], dest: 'tmp/'}
        ]
      }
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-jscs');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'copy', 'stonejs' , 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'jscs', 'test']);

};

// vim:ts=2:sw=2
