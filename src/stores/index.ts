/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2019-09-29 15:18:10
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-16 10:39:05
 */
import IceStore from '@ice/store';
import configStore from './config';

const iceStore = new IceStore();

iceStore.registerStore('configStore', configStore);

export default iceStore;
