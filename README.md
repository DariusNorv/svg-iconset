# svg-iconset-builder
Plugin to create iconsets from SVG files

> Disclaimer:<br>
> This plugin was created to prepare iconsets for [Angular Material Icons](https://material.angular.io/components/icon/api#MatIconRegistry)<br>
> The кesult file will be a set of svg's with unique ids as a filename

## Installation

Support command line interface:
```
npm install svg-iconset-builder -g
```
Or you can install for yout project
```
npm install svg-iconset-builder --save
```
## Usage

### Command line
```
svg-iconset --source=<source_folder|required> --name=<output_filename|required> --attrs=<comma separated attributes> --removeViewBox=<boolean>
```

Examples: 
```
svg-iconset --source=assets/images/icons --name=icons
```
Creates file `icons-iconset.svg` in same folder
### In Project
```

const SvgIconset = require('svg-iconset');

const config = {
  source: 'assets/images/icons', // Reqired
  result: 'icons', // Required
  // This is optional for optimisations
  optimize: {
    attrs: 'width, height, fill, stroke', // Will remove attributes
    removeViewBox: true, // Will remove attribute viewBox (default true)
  }
}

new SvgIconset(config).createSet();

```
