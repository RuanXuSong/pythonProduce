/*
 * @文件描述: CardList表单项
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-14 17:08:17
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-16 14:40:21
 */
import React from 'react';
import { Form, Input } from 'antd';
import { ConfigStore } from '@/interfaces/config';
import stores from '@/stores';
import styles from './index.module.less';
import { FormComponentProps } from 'antd/lib/form';
import { isEmpty } from 'lodash';

const CardListForm = (props: FormComponentProps) => {
  const configStore = stores.useStore('configStore') as ConfigStore;
  const { dataSource } = configStore;
  const { cardListConfig } = dataSource;
  const { cardInfo = {}, cardItems = [] } = cardListConfig || {};
  const { getFieldDecorator } = props.form;

  /** 渲染卡片列表 */
  const renderCardItems = () => {
    const initialCardItems = Array.from({ length: 3 }, (_v, i) => `cardItem${i}`);
    // 若得到数据不空，显示获得的Card数据
    if (!isEmpty(cardItems)) {
      return cardItems.map((item, idx) => (
        <Form.Item key={`cardItem${idx}`} label={`cardItem${idx}`}>
          {getFieldDecorator(`cardItem${idx}`, { initialValue: item })(<Input readOnly />)}
        </Form.Item>
      ));
    } else {
      return (
        <>
          {initialCardItems.map((item, idx) => (
            <Form.Item key={item} label={item}>
              {getFieldDecorator(item, {
                rules: [{ required: true, message: `请选择第${idx}个card的Dom元素` }],
              })(<Input placeholder={item} readOnly />)}
            </Form.Item>
          ))}
        </>
      );
    }
  };

  /** 渲染卡片详情 */
  const renderCardInfo = () => {
    if (!isEmpty(cardInfo)) {
      return Object.keys(cardInfo).map(key => (
        <Form.Item key={key} label={key}>
          {getFieldDecorator(key, {
            initialValue: cardInfo[key],
          })(<Input readOnly />)}
        </Form.Item>
      ));
    } else {
      return (
        <>
          <Form.Item label="title">
            {getFieldDecorator('title')(<Input placeholder="title" readOnly />)}
          </Form.Item>
          <Form.Item label="url">
            {getFieldDecorator('url', {
              rules: [{ required: true, message: '请选择url' }],
            })(<Input placeholder="url" readOnly />)}
          </Form.Item>
        </>
      );
    }
  };

  return (
    <div className={styles.formWrap}>
      <div className={styles.subTitle}>卡片元素(cardItem)</div>
      {renderCardItems()}
      <div className={styles.subTitle}>卡片信息(cardInfo)</div>
      {renderCardInfo()}
    </div>
  );
};

export default CardListForm;
