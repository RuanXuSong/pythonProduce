/*
 * @文件描述: 配置项内容
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-14 17:08:17
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-16 14:24:26
 */
import React from 'react';
import { Input } from 'antd';
import ConfigForm from '../ConfigForm';
import styles from './index.module.less';

interface ConfigContentProps {
  handleSetUrl: (url: string) => void;
}

const ConfigContent = (props: ConfigContentProps) => {
  const { handleSetUrl } = props;
  const handleUrlChange = (value: string) => {
    const regExp = /^https/g;
    if (regExp.test(value)) {
      handleSetUrl(value);
    }
  };

  return (
    <div className={styles.configWrap}>
      <div className={styles.configTitle}>配置项内容</div>
      <div className={styles.subTitle}>基本配置</div>
      <div className={styles.configItem}>
        <span>url:</span>
        <div>
          <Input onChange={e => handleUrlChange(e.target.value)}></Input>
        </div>
      </div>
      <div className={styles.subTitle}>具体配置</div>
      <ConfigForm />
    </div>
  );
};

export default ConfigContent;
