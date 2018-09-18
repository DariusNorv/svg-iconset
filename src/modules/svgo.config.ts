import { SVGOConfig, SvgOptimizeConfig } from '../config';

const defaultConfig: SVGOConfig = [
  {
    removeAttrs: {
      attrs: '(width|height)'
    },
  },
  { removeViewBox: false }
];

export function makeConfig(config?: SvgOptimizeConfig): SVGOConfig {

  if (config !== undefined) {
    const { attrs, removeViewBox } = config;

    if (attrs !== undefined) {
      defaultConfig[0].removeAttrs.attrs = `(${attrs.replace(/,\s/g, '|')})`;
    }

    if (removeViewBox) {
      defaultConfig[1].removeViewBox = removeViewBox;
    }
  }

  return defaultConfig;
}
