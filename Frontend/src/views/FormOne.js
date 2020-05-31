import React from "react";
import { Form, Button, Input, message } from "antd";

const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };

const FormOne = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    onSubmit(values);
  };

  const onFailed = (error) => {
    message.error("An error occured during data entry!");
  };

  return (
    <div>
      <div
        style={{ backgroundColor: "#eb4d4b" }}
        className="shelve font-weight-bold"
      >
        Editing distance measuring shelf:
      </div>
      <div className="prodDetails">
        <div className="pt-3 pb-3 ml-3">
          <Form
            className="mr-3"
            {...layout}
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFailed}
          >
           
                <li>
                  <strong>Product name:</strong>
                  <Form.Item name="name">
                    <Input className="font-weight-bold" type="text" />
                  </Form.Item>
                </li>
                <li>
                  <strong>Shelf height (cm):</strong>
                  <Form.Item name="shelveHeight">
                    <Input className="font-weight-bold" type="number" />
                  </Form.Item>
                </li>
                <li className="mb-2">
                  <strong>Product height (cm):</strong>
                  <Form.Item name="productHeight">
                    <Input className="font-weight-bold" type="number" />
                  </Form.Item>
                </li>
              
              
                <div className="d-flex justify-content-center">
                  <Button
                    className="btn btn-secondary pl-5 pr-5"
                    type="button"
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </div>
             
          </Form>
        </div>
      </div>
    </div>

    // <Form
    //   className="font-weight-bold"
    //   {...layout}
    //   form={form}
    //   onFinish={onFinish}
    //   onFinishFailed={onFailed}
    // >
    //   <Row>
    //     <Col span={16} offset={4}>
    //       <h3>Shelve A-1</h3>

    //       <Form.Item label="Product name:" name="prodName">
    //         <Input placeholder="Aspirin" />
    //       </Form.Item>
    //       <Form.Item label="Shelve height:" name="shelveHeight">
    //         <Input />
    //       </Form.Item>
    //       <Form.Item label="Product height:" name="prodHeight">
    //         <Input />
    //       </Form.Item>
    //       <h3>Shelve A-2</h3>
    //       <Form.Item label="Product name:" name="prodName">
    //         <Input />
    //       </Form.Item>
    //       <Form.Item label="Product weight:" name="prodWeight">
    //         <Input />
    //       </Form.Item>
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col span={16} offset={4}>
    //       <hr />
    //       <div style={{ textAlign: "center" }}>
    //         <Button type="primary" htmlType="submit">
    //           Submit
    //         </Button>
    //       </div>
    //     </Col>
    //   </Row>
    // </Form>
  );
};

export default FormOne;
