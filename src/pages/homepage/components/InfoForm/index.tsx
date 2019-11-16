/*
 * @文件描述: Info详情信息表单项
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-14 17:08:17
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-16 14:40:41
 */
import React from 'react';
import { Form, Input } from 'antd';
import { ConfigStore } from '@/interfaces/config';
import { FormComponentProps } from 'antd/lib/form';
import stores from '@/stores';
import styles from './index.module.less';
import { isEmpty } from 'lodash';

const InfoForm = (props: FormComponentProps) => {
  const configStore = stores.useStore('configStore') as ConfigStore;
  const { dataSource } = configStore;
  const { infoConfig = {} } = dataSource;
  const { getFieldDecorator } = props.form;

  /** 渲染详情 */
  const renderInfo = () => {
    if (!isEmpty(infoConfig)) {
      return Object.keys(infoConfig).map(key => (
        <Form.Item key={key} label={key}>
          {getFieldDecorator(key, {
            initialValue: infoConfig[key],
          })(<Input readOnly />)}
        </Form.Item>
      ));
    } else {
      return (
        <>
          <Form.Item label="title">
            {getFieldDecorator('title')(<Input placeholder="title" readOnly />)}
          </Form.Item>
          <Form.Item label="content">
            {getFieldDecorator('content')(<Input placeholder="content" readOnly />)}
          </Form.Item>
        </>
      );
    }
  };

  return (
    <div className={styles.formWrap}>
      <div className={styles.subTitle}>详情信息</div>
      {renderInfo()}
    </div>
  );
};

export default InfoForm;
