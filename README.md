# grunt-stonejs

> Stone.js Grunt plugin to extract / compile translatable strings

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-stonejs-tools --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-stonejs-tools');
```

## The "stonejs" task

### Overview
In your project's Gruntfile, add a section named `stonejs` to the data object passed into `grunt.initConfig()`.

```js
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
Type: `Boolean
Default value: `false`

Do not output the stonejs-tools log.

#### options.functions
Type: `Array`
Default value: `['_', 'gettext', 'lazyGettext']`

List of the translation functions

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
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  stonejs: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, we output a merged javascript catalog.

```js
grunt.initConfig({
  stonejs: {
    default: {
      src: ['src/**/*.js', 'src/*.html'],
      pot: 'locales/catalog.pot',
      po: ['locales/*.po'],
      output: 'locales/',
      options: {
        quiet: false,
        functions: ['_', 'gettext', 'lazyGettext'],
        merge: true,
        format: 'json'
      }
    }
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
