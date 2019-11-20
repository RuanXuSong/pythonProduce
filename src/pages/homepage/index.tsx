/*
 * @文件描述:首页
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-14 14:44:35
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-19 21:09:34
 */
import React, { useState, useEffect } from 'react';
import { ConfigStore } from '@/interfaces/config';
import stores from '../../stores';
import ConfigContent from './components/ConfigContent';
import styles from './index.module.less';

const Homepage = () => {
  const configStore = stores.useStore('configStore') as ConfigStore;
  const [url, setUrl] = useState('');
  const [infoUrl, setInfoUrl] = useState('');
  const [iframeType, setIframeType] = useState('url');
  const { getConfigData } = configStore;
  const iframeSrc = `${iframeType === 'url' ? url : infoUrl}`;
  const handleUrlChange = (value: string, type: string) => {
    if (type === 'url') {
      setUrl(value);
    } else {
      setInfoUrl(value);
    }
    setIframeType(type);
  };

  // 初始化获取配置数据
  useEffect(() => {
    getConfigData();
  }, [getConfigData]);

  return (
    <div className={styles.container}>
      <ConfigContent handleSetUrl={handleUrlChange} />
      <div className={styles.iframeWrap}>
        <iframe width={'100%'} height={'100%'} src={iframeSrc}></iframe>
      </div>
    </div>
  );
};
export default Homepage;
