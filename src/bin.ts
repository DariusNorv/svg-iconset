#!/usr/bin/env node
import { exit } from 'process';

import { SvgIconset } from './app';
import { readFileSync } from 'fs';
import { join } from 'path';


const argv = require('yargs').argv;
const exampleString = 'Example: svg-iconset --source=assets/images/icons --result=icons, check docs https://github.com/DariusNorv/svg-iconset#usage';
let optimize = undefined;

const {
  source,
  result,
  svgoConfig
} = argv;


if (source === undefined) {
  console.error('Source dir is not set');
  console.error(exampleString);
  exit();
}

if (result === undefined) {
  console.error('Result filename is not set');
  console.error(exampleString);
  exit();
}

if (svgoConfig !== undefined) {
  try {
    optimize = JSON.parse(readFileSync(join(process.cwd(), svgoConfig), 'utf-8'));
  } catch (err) {
    console.error('SVGO configuration file parse error', err.message);
    process.exit(0);
  }
}

new SvgIconset({
  source,
  result,
  optimize
}).createSet();
