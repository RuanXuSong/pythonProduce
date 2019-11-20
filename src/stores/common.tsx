/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-07-19 10:42:52
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-16 15:21:06
 */
import { message } from 'antd';

export const messageFail = (msg: string) => message.warning(msg);
export const messageSuccess = (msg: string) => message.success(msg);
