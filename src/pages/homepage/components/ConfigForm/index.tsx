/*
 * @文件描述: 配置项表单
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2019-11-14 17:08:17
 * @LastEditors: 阮旭松
 * @LastEditTime: 2019-11-16 14:48:08
 */
import React from 'react';
import { Form, Collapse, Button } from 'antd';
import CardListForm from '../CardListForm';
import { FormComponentProps } from 'antd/lib/form';
import PageForm from '../PageForm';
import InfoForm from '../InfoForm';
import { formItemLayout, INITIAL_ACTIVES } from '../../constant';
import styles from './index.module.less';

const { Panel } = Collapse;

interface ConfigContentProps extends FormComponentProps {
  handleSetUrl: (url: string) => void;
}

const Config = (props: ConfigContentProps) => {
  /** 提交配置项表单 */
  const handleSubmit = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  /** 测试配置项表单 */
  const handleTest = () => {
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  /** 渲染按钮 */
  const renderBtns = () => (
    <div className={styles.btnWrap}>
      <Button className={styles.funcBtn} type="primary" onClick={handleSubmit}>
        提交
      </Button>
      <Button className={styles.funcBtn} type="primary" onClick={handleTest}>
        测试
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit} {...formItemLayout}>
      <Collapse defaultActiveKey={INITIAL_ACTIVES}>
        <Panel header="Card-List" key="cardList">
          <CardListForm {...props} />
        </Panel>
        <Panel header="Page" key="Page">
          <PageForm {...props} />
        </Panel>
        <Panel header="Info" key="Info">
          <InfoForm {...props} />
        </Panel>
      </Collapse>
      {renderBtns()}
    </Form>
  );
};

const ConfigForm = Form.create()(Config);

export default ConfigForm;
