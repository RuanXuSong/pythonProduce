/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-16 14:55:50
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-16 14:59:12
 */

import IceStore from '@ice/store';
import configStore from './config';

const iceStore = new IceStore();

iceStore.registerStore('configStore', configStore);

export default iceStore;
