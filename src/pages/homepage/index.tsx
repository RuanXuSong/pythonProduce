import React, { useState } from 'react';
import { Input } from 'antd';
import { initialUrl } from '@/constant';
import styles from './index.module.less';

const Homepage = () => {
  const [url, setUrl] = useState(initialUrl);
  const handleUrlChange = (value: string) => {
    const regExp = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/g;
    if (regExp.test(value)) {
      setUrl(value);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.iframeWrap}>
        <iframe width={'100%'} height={'100%'} src={url}></iframe>
      </div>
      <div className={styles.configWrap}>
        <div className={styles.configTitle}>配置项内容</div>
        <div className={styles.configItem}>
          <span>url:</span>
          <div>
            <Input onChange={e => handleUrlChange(e.target.value)}></Input>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
