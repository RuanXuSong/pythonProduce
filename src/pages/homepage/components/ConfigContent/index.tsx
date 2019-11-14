import React, { useState } from 'react';
import { Input, message } from 'antd';
import { initialUrl } from '@/constant';
import styles from './index.module.less';

const ConfigContent = () => {
  const [url, setUrl] = useState(initialUrl);
  const handleUrlChange = (value: string) => {
    const regExp = /^https/g;
    if (regExp.test(value)) {
      setUrl(value);
    } else {
      message.error('请输入正确的url地址!');
    }
  };
  return (
    <div className={styles.configWrap}>
      <div className={styles.configTitle}>配置项内容</div>
      <div className={styles.configItem}>
        <span>url:</span>
        <div>
          <Input onChange={e => handleUrlChange(e.target.value)}></Input>
        </div>
      </div>
    </div>
  );
};
export default ConfigContent;
