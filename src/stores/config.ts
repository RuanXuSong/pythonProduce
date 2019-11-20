/*
 * @文件描述:配置项store
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-16 10:39:41
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-16 15:21:32
 */
import { ConfigStore, DataSourceProps } from '../interfaces/config';
import { messageFail } from './common';
import { request } from '@td-design/utils';

const configModel = {
  dataSource: {},
};

const configStore: ConfigStore = {
  ...configModel,
  // methods
  async getConfigData() {
    try {
      const result = await request.get<DataSourceProps>('/config');
      if (result.success) {
        this.dataSource = result.data;
      } else {
        throw result;
      }
    } catch (err) {
      messageFail(err.message);
    }
  },
};
export default configStore;
