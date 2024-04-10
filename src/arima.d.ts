declare module "arima" {
  export default class Arima {
    constructor(options: {
      auto?: boolean;
      p?: number;
      d?: number;
      q?: number;
      P?: number;
      D?: number;
      Q?: number;
      s?: number;
      method?: number;
      optimizer?: number;
      transpose?: boolean;
      approximation?: number;
      search?: number;
      verbose?: boolean;
    });

    train(data: number[]): void;

    predict(count: number): [number[]];
  }
}
