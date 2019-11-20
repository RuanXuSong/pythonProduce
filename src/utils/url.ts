/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-19 12:06:28
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-19 19:34:51
 */
import crypto from 'crypto';

/**
 * @功能描述: 获得哈希处理的string
 * @参数: url
 * @返回值: 哈希字符串
 */
export const getHashUrl = (url: string) => {
  const shaSum = crypto.createHash('md5');
  shaSum.update(url);
  const hashString = shaSum.digest('hex');
  return hashString;
};
