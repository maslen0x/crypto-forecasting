export type OhlcChartData = {
  x: Date;
  y: [number, number, number, number];
}[];

export type LineChartData = {
  x: Date;
  y: number | null;
}[];
