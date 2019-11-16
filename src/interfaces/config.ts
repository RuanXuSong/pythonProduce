/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-16 10:42:25
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-16 11:25:40
 */

export interface CardInfoProps {
  url: string;
  [name: string]: string;
}

export interface InfoConfigProps {
  [name: string]: string;
}

export interface CardListProps {
  cardItems: string[];
  cardInfo: CardInfoProps;
}

export interface DataSourceProps {
  cardListConfig?: CardListProps;
  pageConfig?: string;
  infoConfig?: InfoConfigProps;
}

export interface ConfigStore {
  dataSource: DataSourceProps;
  getConfigData: () => void;
}
