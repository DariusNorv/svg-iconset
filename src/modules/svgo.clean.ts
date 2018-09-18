import { readdir, readFileSync } from 'fs';
import { join } from 'path';

import { OptimizedResponse } from '../config';

const SVGO = require('svgo');
export function svgClean(path: string, svgo: typeof SVGO): Promise<OptimizedResponse[]> {

  return new Promise((resolve, reject) => {

    readdir(path, (err, svgFiles) => {
      if (err) {
        return reject(err);
      }

      const files = svgFiles.filter(filename => filename.indexOf('iconset') === -1 && filename.indexOf('.svg') > -1)
        .map(dirtyFile => {
          const filePath = join(path, dirtyFile);
          return {
            id: dirtyFile.replace(/.svg/, ''),
            optimized: svgo.optimize(readFileSync(filePath))
          };
        });

      return files.length > 0 ? resolve(files) : reject('There are no SVG files to optimize');

    });

  });
}
