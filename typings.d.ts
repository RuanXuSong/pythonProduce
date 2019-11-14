/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-09-04 12:53:48
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-14 18:35:52
 */
declare module '*.css';
declare module '*.png';
declare module '*.jpg';
declare module '*.less';
declare module 'react-field-mapping';
declare module 'classnames';
declare module 'rc-form/es/createFormField';

type Merge<M, N> = Omit<M, Extract<keyof M, keyof N>> & N;

interface ThemeSettingConfig {
  theme: object; // 对应配置的theme-config.js文件
  templateCss: string; // 对应按需抽离出来的样式模版
  generate: (color: string) => void; // antd的color计算逻辑 会在change的时候自动调用
  change: (key?: string, config?: object) => void; // 切换主题方法 通过主题key或自定义新增配置
  init: () => void; // 初始化函数 会在项目第一次加载的时候自动调用 设置主题key为default
}
declare let themeSetting: ThemeSettingConfig;
