/* eslint-disable complexity */
/*
 * @文件描述: 配置项内容
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-14 17:08:17
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-20 10:36:43
 */
import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { getHashUrl } from '@/utils/url';
import styles from './index.module.less';

interface ConfigContentProps {
  handleSetUrl: (url: string, type: string) => void;
}

const ConfigContent = (props: ConfigContentProps) => {
  const { handleSetUrl } = props;
  const [url, setUrl] = useState<string>('');
  const [infoUrl, setInfoUrl] = useState<string>('');
  const [hashString, setHashString] = useState<string>('');

  const handleUrlChange = (value: string, type: string) => {
    const regExp = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/g;
    let hashUrl = '';
    const routeUrl = type === 'url' ? url : infoUrl;
    let hashWord = hashString;
    if (!regExp.test(value)) {
      return;
    }
    if (type === 'url') {
      hashWord = getHashUrl(value);
      setHashString(hashWord);
    }
    if (value.indexOf('?') === -1) {
      hashUrl = `${routeUrl}?thundersData=${hashWord}`;
    } else {
      hashUrl = `${routeUrl}&thundersData=${hashWord}`;
    }
    // 若为列表页的url，重新设置hash，若为Info详情页，与列表页公用一个hash
    handleSetUrl(hashUrl, type);
  };

  return (
    <div className={styles.configWrap}>
      <div className={styles.configItem}>
        <span className={styles.urlLabel}>url:</span>
        <div className={styles.searchInput}>
          <Input value={url} onChange={e => setUrl(e.target.value)}></Input>
        </div>
        <Button className={styles.confirmBtn} onClick={() => handleUrlChange(url, 'url')}>
          跳转
        </Button>
      </div>
      <div className={styles.configItem}>
        <span className={styles.urlLabel}>infoUrl:</span>
        <div className={styles.searchInput}>
          <Input value={infoUrl} onChange={e => setInfoUrl(e.target.value)}></Input>
        </div>
        <Button className={styles.confirmBtn} onClick={() => handleUrlChange(infoUrl, 'infoUrl')}>
          跳转
        </Button>
      </div>
    </div>
  );
};

export default ConfigContent;
