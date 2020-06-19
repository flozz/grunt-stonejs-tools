/*
 * grunt-stonejs
 * https://github.com/flozz/grunt-stonejs
 *
 * Copyright (c) 2015 Fabien LOISON <http://www.flozz.fr/>
 * Licensed under the BSD-3-Clause license.
 */

'use strict';

module.exports = function(grunt) {

  var stonejs = require('stonejs-tools');

  grunt.registerMultiTask('stonejs', 'Stone.js Grunt plugin to extract / compile translatable strings', function() {
    var src = grunt.config.get("stonejs")[this.target].src;
    if (src && !Array.isArray(src)) {
      src = [src];
    }
    var pot = grunt.config.get("stonejs")[this.target].pot;
    var po = grunt.config.get("stonejs")[this.target].po;
    if (po && !Array.isArray(po)) {
      po = [po];
    }
    var output = grunt.config.get("stonejs")[this.target].output;

    var options = this.options({
      quiet: false,
      merge: false,
      format: 'json',
    });

    var done = this.async();

    function build() {
      if (po && output) {
        grunt.log.subhead("Building catalogs...");
        stonejs.build(po, output, options, function(error) {
          if (error) {
            grunt.fail.fatal(error);
            done();
          }
          else {
            done();
          }
        });
      } else {
        done();
      }
    }

    function update() {
      if (pot && po) {
        grunt.log.subhead("Updating po files...");
        stonejs.update(po, pot, options, function(error) {
          if (error) {
            grunt.fail.fatal(error);
            done();
          }
          else {
            build();
          }
        });
      } else {
        build();
      }
    }

    function extract() {
      if (src && pot) {
        grunt.log.subhead("Extracting strings...");
        stonejs.extract(src, pot, options, function(error) {
          if (error) {
            grunt.fail.fatal(error);
            done();
          }
          else {
            update();
          }
        });
      } else {
        update();
      }
    }

    extract();
  });

};

// vim:ts=2:sw=2
