# grunt-stonejs-tools

[![Lint and test](https://github.com/flozz/grunt-stonejs-tools/actions/workflows/tests.yml/badge.svg)](https://github.com/flozz/grunt-stonejs-tools/actions/workflows/tests.yml)
[![NPM Version](http://img.shields.io/npm/v/grunt-stonejs-tools.svg?style=flat)](https://www.npmjs.com/package/grunt-stonejs-tools)
[![License](http://img.shields.io/badge/license-BSD--3--Clause-blue.svg?style=flat)](https://github.com/flozz/grunt-stonejs-tools/blob/master/LICENSE-BSD-3-Clause)
[![Discord](https://img.shields.io/badge/chat-Discord-8c9eff?logo=discord&logoColor=ffffff)](https://discord.gg/P77sWhuSs4)

> Stone.js Grunt plugin to extract / compile translatable strings

Related projects:

* [stone.js](https://github.com/flozz/stone.js)
* [stonejs-tools](https://github.com/flozz/stonejs-tools)


## Getting Started

This plugin requires Grunt `~1.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-stonejs-tools --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```javascript
grunt.loadNpmTasks('grunt-stonejs-tools');
```


## The "stonejs" task

### Overview

In your project's Gruntfile, add a section named `stonejs` to the data object passed into `grunt.initConfig()`.

```javascript
grunt.initConfig({
  stonejs: {
    your_target: {
      // Source files (js/html)
      src: ['src/**/*.js', 'src/*.html'],
      // Translation template (.pot)
      pot: 'locales/catalog.pot',
      // Localised translation files (.po)
      po: ['locales/*.po'],
      // Output folder (or file if the `merge` option is set to true)
      output: 'locales/',
      options: {
        // your options here
      }
    },
  },
});
```


### Options

#### options.quiet

Type: `Boolean`
Default value: `false`

Do not output the stonejs-tools log.


#### options.functions

Type: `Array`
Default value: `['_', 'gettext', 'lazyGettext', 'gettext_noop', 'N_']`

List of the translation functions


#### options.pluralFunctions

Type: `Array`
Default value: `['ngettext', 'lazyNgettext']`

List of the translation functions with plural forms support


#### options.contextFunctions

Type: `Array`
Default value: `['pgettext', 'lazyPgettext']`

List of the translation functions with context support


#### options.pluralContextFunctions

Type: `Array`
Default value: `['npgettext', 'lazyNpgettext']`

List of the translation functions with context and plural forms support


#### options.merge

Type: `boolean`
Default value: `false`

Merge all locales into a single file.


#### options.format

Type: `String`
Values: `json` or `js`
Default value: `'json'`

Output format for the built catalog.


### Usage Examples

#### Default Options

```javascript
grunt.initConfig({
  stonejs: {
    default: {
      src: ['src/**/*.js', 'src/*.html'],
      pot: 'locales/catalog.pot',
      po: ['locales/*.po'],
      output: 'locales/',
      options: {
        quiet: false,
        functions: ['_', 'gettext', 'lazyGettext', 'gettext_noop', 'N_'],
        pluralFunctions: ['ngettext', 'lazyNgettext'],
        contextFunctions: ['pgettext', 'lazyPgettext'],
        pluralContextFunctions: ['npgettext', 'lazyNpgettext'],
        merge: false,
        format: 'json'
      }
    }
  },
});
```


#### Custom Options

In this example, we output a merged javascript catalog.

```javascript
grunt.initConfig({
  stonejs: {
    default: {
      src: ['src/**/*.js', 'src/*.html'],
      pot: 'locales/catalog.pot',
      po: ['locales/*.po'],
      output: 'locales/catalog.js',
      options: {
        quiet: false,
        functions: ['_', 'gettext', 'lazyGettext', 'gettext_noop', 'N_'],
        pluralFunctions: ['ngettext', 'lazyNgettext'],
        contextFunctions: ['pgettext', 'lazyPgettext'],
        pluralContextFunctions: ['npgettext', 'lazyNpgettext'],
        merge: true,
        format: 'js'
      }
    }
  },
});
```


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## Support this project

Want to support this project?

* [☕️ Buy me a coffee](https://www.buymeacoffee.com/flozz>)
* [💵️ Give me a tip on PayPal](https://www.paypal.me/0xflozz>)
* [❤️ Sponsor me on GitHub](https://github.com/sponsors/flozz>)


## Changelog

* **[NEXT]** (changes on `master` but not released yet):

  * Nothing yet ;)

* **v2.1.0:**

  * Now requires stone-tools >= 1.5.0
  * Updated dependencies

* **v2.0.0:**

  * Updates to support new stonejs-tools version.
  * Support of Grunt < 1.0.0 dropped

* **v1.0.2:** Updates peer dependencies to support Grunt 1.0
* **v1.0.1:** Clean useless files in the NPM package
* **v1.0.0:** First release
