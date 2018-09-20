# @vkl/svg-iconset-builder
Plugin for creating iconsets from SVG files with customizable optimisations

## Installation

Support command line interface:
```
npm install @vkl/svg-iconset-builder -g
```
Or you can install for yout project
```
npm install @vkl/svg-iconset-builder --save
```
## Usage

### Command line
```
svg-iconset --source=<source_folder|required> --result=<output_filename|required> --svgoConfig=<path to SVGO configuration json file>
```

Examples: 
```
svg-iconset --source=assets/images/icons --result=icons
```
Creates a file `icons-iconset.svg` in same folder
### In Project
```javascript
const SvgIconset = require('svg-iconset');

const config = {
  source: 'assets/images/icons', // Reqired
  result: 'icons', // Required
  // This is optional for optimize files using SVGO plugins
  optimize: {
    removeViewBox: true, // Will remove attribute viewBox
  }
}

new SvgIconset(config).createSet();
```

#### Additional
[Default SVGO optimisation config](https://github.com/DariusNorv/svg-iconset/wiki#default-svgo-configuration)

