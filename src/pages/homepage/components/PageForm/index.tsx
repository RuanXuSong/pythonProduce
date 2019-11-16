/*
 * @文件描述: 分页DOM表单项
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-14 17:08:17
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-16 14:39:06
 */
import React from 'react';
import { Form, Input } from 'antd';
import { ConfigStore } from '@/interfaces/config';
import stores from '@/stores';
import styles from './index.module.less';
import { FormComponentProps } from 'antd/lib/form';

const PageForm = (props: FormComponentProps) => {
  const configStore = stores.useStore('configStore') as ConfigStore;
  const { dataSource } = configStore;
  const { pageConfig } = dataSource;
  const { getFieldDecorator } = props.form;

  return (
    <div className={styles.formWrap}>
      <div className={styles.subTitle}>分页DOM</div>
      <Form.Item label="pageDom">
        {getFieldDecorator('pageDom', { initialValue: pageConfig })(
          <Input placeholder="请选择分页DOM" readOnly />,
        )}
      </Form.Item>
    </div>
  );
};

export default PageForm;
