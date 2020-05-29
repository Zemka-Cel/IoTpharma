import React from "react";
import { Form, Button, Input, message, Row, Col } from "antd";

const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };

const EditForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    onSubmit(values);
  };

  const onFailed = (error) => {
    message.error("An error occured during data entry!");
  };

  return (
    <Form
      className="font-weight-bold"
      {...layout}
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFailed}
    >
      <Row>
        <Col span={16} offset={4}>
          <h3>Shelve A-1</h3>

          <Form.Item label="Product name:" name="prodName">
            <Input placeholder="Aspirin" />
          </Form.Item>
          <Form.Item label="Shelve height:" name="shelveHeight">
            <Input />
          </Form.Item>
          <Form.Item label="Product height:" name="prodHeight">
            <Input />
          </Form.Item>
          <h3>Shelve A-2</h3>
          <Form.Item label="Product name:" name="prodName">
            <Input />
          </Form.Item>
          <Form.Item label="Product weight:" name="prodWeight">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={16} offset={4}>
          <hr />
          <div style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default EditForm;
