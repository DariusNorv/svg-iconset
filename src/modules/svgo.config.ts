import { SVGOConfig } from '../config';

export const defaultConfig: SVGOConfig = {
  removeDoctype: true,
  removeXMLProcInst: true,
  removeComments: true,
  removeMetadata: true,
  removeXMLNS: false,
  removeEditorsNSData: true,
  cleanupAttrs: true,
  inlineStyles: true,
  minifyStyles: true,
  convertStyleToAttrs: true,
  cleanupIDs: true,
  removeRasterImages: false,
  removeUselessDefs: true,
  cleanupNumericValues: true,
  cleanupListOfValues: false,
  convertColors: true,
  removeUnknownsAndDefaults: true,
  removeNonInheritableGroupAttrs: true,
  removeUselessStrokeAndFill: true,
  removeViewBox: false,
  cleanupEnableBackground: true,
  removeHiddenElems: true,
  removeEmptyText: true,
  convertShapeToPath: true,
  moveElemsAttrsToGroup: true,
  moveGroupAttrsToElems: true,
  collapseGroups: true,
  convertPathData: true,
  convertTransform: true,
  removeEmptyAttrs: true,
  removeEmptyContainers: true,
  mergePaths: true,
  removeUnusedNS: true,
  sortAttrs: false,
  removeTitle: true,
  removeDesc: true,
  removeDimensions: true,
  removeStyleElement: false,
  removeScriptElement: false,

  *[Symbol.iterator]() {
    for (const name of Object.keys(this)) {
      yield JSON.parse(`{"${name}": ${(this as any)[name]}}`);
    }
  }
};

export function makeConfig(config?: SVGOConfig): { [prop: string]: boolean }[] {

  if (config !== undefined) {
    return [...defaultConfig].map(item => {
      const key = Object.keys(item)[0];
      if (config.hasOwnProperty(key)) {
        item[key] = (config as any)[key];
      }

      return item;
    });
  }

  return [...defaultConfig];
}
