/**
 * Created by Radu on 23.02.2017.
 */
export interface GlobalConfig {
  type: string;
  config: Config;
  dataFn: Function;
}

export interface Config {
  numItems: number;
  orderBy: string;
  orderDirection: number;
  startIndex: number;
}

export interface SortingConfig {
  orderBy: string;
  orderDirection: number;
  dataType: string;
  dataFn: Function;
  numItems: number;
}
