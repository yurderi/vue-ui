'use strict';

const path = require('path');

// Hardcoding here (and not reading from package.json) as the files are built
// before the version is updated in package.json
const version = '1.0.3';

const banner =
  '/*!\n' +
  ' * Rhinos UI v' + version + '\n' +
  ' * (c) ' + new Date().getFullYear() + ' Rhinos Media&reg; UG\n' +
  ' * Released under the MIT License.\n' +
  ' */';

module.exports = {
    banner,
    isProduction: process.env.NODE_ENV === 'production',
    paths: {
        root: path.join(__dirname, '..'),
        src: {
            main: path.join(__dirname, '..', 'src'),
        },
        output: {
            main: path.join(__dirname, '..', 'dist'),
        },
        resolve(location) {
            return path.join(__dirname, '..', location);
        }
    }
};
