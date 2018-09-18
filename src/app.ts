import { createWriteStream, WriteStream } from 'fs';
import { join } from 'path';

import { MainConfig, SVGOConfig } from './config';
import { svgClean } from './modules/svgo.clean';
import { makeConfig } from './modules/svgo.config';

const SVGO = require('svgo');

export class SvgIconset {

  private optimizeConfig: SVGOConfig;
  private isValid: boolean = true;
  private svgoPlugin: typeof SVGO;

  constructor(private config: MainConfig) {
    if (config.result === undefined || config.source === undefined) {
      this.isValid = false;
    }
    this.optimizeConfig = config.optimize !== undefined ? makeConfig(config.optimize) : makeConfig();
    this.svgoPlugin = new SVGO(this.optimizeConfig);

  }

  public createSet() {
    if (!this.isValid) {
      return console.error('Configuration is not valid, check source or result are available');
    }

    svgClean(this.config.source, this.svgoPlugin)
      .then(files => {
        createWriteStream(join(process.cwd(), this.config.source, `${this.config.result}-iconset.svg`))
          .once('open', function (this: WriteStream) {
            this.write(`<svg>${files}</svg>`);
          })
          .on('close', () => console.log(`Succesfully written file ${this.config.result}-iconset.svg`))
          .on('error', () => console.error('Something’s wrong try again'));
      })
      .catch(err => console.error(err));
  }

}
