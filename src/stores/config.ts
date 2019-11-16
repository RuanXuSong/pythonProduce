/*
 * @文件描述:配置项store
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-16 10:39:41
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-16 11:29:34
 */
import { ConfigStore, DataSourceProps } from '../interfaces/config';
import { request } from '@td-design/utils';

const configModel = {
  dataSource: {},
};

const configStore: ConfigStore = {
  ...configModel,
  // methods
  async getConfigData() {
    const result = await request.get<DataSourceProps>('/config');
    this.dataSource = result.data;
  },
};
export default configStore;
