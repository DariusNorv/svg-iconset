const SVGO = require('svgo');
import { readdir } from 'fs';

export function svgClean(path: string, svgo: typeof SVGO): Promise<SVGElement[]> {

  return new Promise((resolve, reject) => {

    readdir(path, (err, svgFiles) => {
      if (err) {
        return reject(err);
      }

      const files = svgFiles.filter(filename => filename.indexOf('iconset') === -1 && filename.indexOf('.svg') > -1)
        .map(dirtyFile => svgo.optimize(dirtyFile));

      return files.length > 0 ? resolve(files) : reject('There are no SVG files to optimize');

    });

  });
}
