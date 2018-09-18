#!/usr/bin/env node
import { exit } from 'process';

import { SvgIconset } from './app';


const argv = require('yargs').argv;
const exampleString = 'Example: svg-iconset --source=assets/images/icons --name=icons';

const {
  source,
  name,
  attrs,
  removeViewBox
} = argv;


if (source === undefined) {
  console.error('Source dir is not set');
  console.error(exampleString);
  exit();
}

if (name === undefined) {
  console.error('Result filename is not set');
  console.error(exampleString);
  exit();
}

new SvgIconset({
  source,
  result: name,
  optimize: {
    attrs,
    removeViewBox
  }
}).createSet();
