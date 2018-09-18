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
  optimize?: SvgOptimizeConfig
}
