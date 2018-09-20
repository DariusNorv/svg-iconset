import { createWriteStream, WriteStream } from 'fs';
import { join } from 'path';

import { MainConfig, SVGOConfig, OptimizedResponse } from './config';
import { svgClean } from './modules/svgo.clean';
import { makeConfig, defaultConfig } from './modules/svgo.config';

const SVGO = require('svgo');

export class SvgIconset {

  private optimizeConfig: { [prop: string]: boolean }[];
  private isValid: boolean = true;
  private svgoPlugin: typeof SVGO;

  constructor(private config: MainConfig) {
    if (config.result === undefined || config.source === undefined) {
      this.isValid = false;
    }
    this.optimizeConfig = config.optimize !== undefined ? makeConfig(config.optimize) : makeConfig();
    this.svgoPlugin = new SVGO({
      plugins: this.optimizeConfig
    });
  }

  public createSet() {
    if (!this.isValid) {
      return console.error('Configuration is not valid, check source or result are available');
    }

    svgClean(this.config.source, this.svgoPlugin)
      .then(optimizedResponse => {
        const ids = optimizedResponse.map(el => el.id);
        Promise.all(optimizedResponse.map(el => el.optimized))
          .then(resFiles => {
            const resultFile = join(process.cwd(), this.config.source, `${this.config.result}-iconset.svg`);
            createWriteStream(resultFile)
              .once('open', function (this: WriteStream) {
                try {
                  const data = resFiles.map((res, idx) => res.data.replace(/<svg /, `<svg id="${ids[idx]}" `));
                  this.write(`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">${data.join('')}</svg>`);
                  this.end();
                } catch (err) {
                  console.log('ERROR', err);
                }
              })
              .on('close', () => console.log(`Succesfully written file ${resultFile}`))
              .on('error', () => console.error('Something’s wrong try again'));
          })
          .catch(console.error);
      })
      .catch(err => console.error(err));
  }

}
