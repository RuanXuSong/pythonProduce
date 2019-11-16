/*
 * @文件描述:首页
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-14 14:44:35
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-16 14:47:12
 */
import React, { useState, useEffect } from 'react';
import { ConfigStore } from '@/interfaces/config';
import stores from '../../stores';
import ConfigContent from './components/ConfigContent';
import { initialUrl } from '@/constant';
import styles from './index.module.less';

const Homepage = () => {
  const configStore = stores.useStore('configStore') as ConfigStore;
  const [url, setUrl] = useState(initialUrl);
  const { getConfigData } = configStore;
  const handleUrlChange = (value: string) => {
    const regExp = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/g;
    if (regExp.test(value)) {
      setUrl(value);
    }
  };
  // 初始化获取配置数据
  useEffect(() => {
    getConfigData();
  }, [getConfigData]);
  return (
    <div className={styles.container}>
      <div className={styles.iframeWrap}>
        <iframe width={'100%'} height={'100%'} src={url}></iframe>
      </div>
      <ConfigContent handleSetUrl={handleUrlChange} />
      <div className={styles.refreshBtn} onClick={getConfigData}>
        更新配置项
      </div>
    </div>
  );
};
export default Homepage;
