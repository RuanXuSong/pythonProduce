/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-14 14:44:35
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-14 17:24:57
 */
import { IConfig } from 'umi-types';
import routerConfig from './config/route.config';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  routes: routerConfig,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'pythonProduce',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};

export default config;
