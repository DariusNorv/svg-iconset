export interface SVGOResponse {
  data: string;
  info: { [propname: string]: string }
}

export interface OptimizedResponse {
  id: string;
  optimized: SVGOResponse
}

export interface MainConfig {
  source: string;
  result: string;
  optimize?: SVGOConfig
}

interface SVGOConfig extends Iterable<{ [prop: string]: boolean }>{
  removeDoctype?: boolean;
  removeXMLProcInst?: boolean;
  removeComments?: boolean;
  removeMetadata?: boolean;
  removeXMLNS?: boolean;
  removeEditorsNSData?: boolean;
  cleanupAttrs?: boolean;
  inlineStyles?: boolean;
  minifyStyles?: boolean;
  convertStyleToAttrs?: boolean;
  cleanupIDs?: boolean;
  removeRasterImages?: boolean;
  removeUselessDefs?: boolean;
  cleanupNumericValues?: boolean;
  cleanupListOfValues?: boolean;
  convertColors?: boolean;
  removeUnknownsAndDefaults?: boolean;
  removeNonInheritableGroupAttrs?: boolean;
  removeUselessStrokeAndFill?: boolean;
  removeViewBox?: boolean;
  cleanupEnableBackground?: boolean;
  removeHiddenElems?: boolean;
  removeEmptyText?: boolean;
  convertShapeToPath?: boolean;
  moveElemsAttrsToGroup?: boolean;
  moveGroupAttrsToElems?: boolean;
  collapseGroups?: boolean;
  convertPathData?: boolean;
  convertTransform?: boolean;
  removeEmptyAttrs?: boolean;
  removeEmptyContainers?: boolean;
  mergePaths?: boolean;
  removeUnusedNS?: boolean;
  sortAttrs?: boolean;
  removeTitle?: boolean;
  removeDesc?: boolean;
  removeDimensions?: boolean;
  removeStyleElement?: boolean;
  removeScriptElement?: boolean;
}
