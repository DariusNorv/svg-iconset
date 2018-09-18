declare type SVGOConfig = [
  {
    removeAttrs: {
      attrs: string
    }
  },
  {
    removeViewBox: boolean
  }
]

export interface SvgOptimizeConfig {
  attrs?: string;
  removeViewBox?: boolean
}

export interface MainConfig {
  source: string;
  result: string;
  optimize?: SvgOptimizeConfig
}
