// import React from "react";
// import Axios from "axios";

// class MyForm extends React.Component {
//     constructor() {
//       super();
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleSubmit(event) {
//       event.preventDefault();
//       const data = new FormData(event.target);
      
//       fetch('http://localhost:4300/shelveOne', {
//         method: 'POST',
//         body: data,
//       });
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//                 <label htmlFor="id">ID</label>
//           <input id="id" name="id" type="number" />
//           <label htmlFor="username">Name</label>
//           <input id="name" name="name" type="text" />
  
//           <label htmlFor="shelveHeight">polica</label>
//           <input id="shelveHeight" name="shelveHeight" type="number" />
  
//           <label htmlFor="productHeight">productS</label>
//           <input id="productHeight" name="productHeight" type="number" />
  
//           <button>Send data!</button>
//         </form>
//       );
//     }
//   }

  
// export default MyForm;

import React from 'react';
import { Form, Button, Input, message, Row, Col } from 'antd';

const layout = { labelCol: { span: 8 }, wrapperCol: { span: 16 } };

const MyForm = ({ onSubmit }) => {

  const [form] = Form.useForm();
  const onFinish = values => {
    onSubmit(values);
  }

  const onFailed = (error) => {
    message.error('An error occured during data entry!');
  }

  return (
    <Form {...layout} form={form} onFinish={onFinish} onFinishFailed={onFailed}>
      <Row>
        <Col span={16} offset={4}>
          <Form.Item label='Id' name='id'><Input /></Form.Item>
          <Form.Item label='Title' name='title'><Input /></Form.Item>
          <Form.Item label='Author' name='author'><Input /></Form.Item>
          <Form.Item label='Price' name='price'><Input /></Form.Item>
          <Form.Item label='Pages' name='pages'><Input /></Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={11} offset={9}>
          <hr />
          <div style={{ textAlign: 'center' }}>
            <Button type="primary" htmlType="submit">Submit</Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
}

export default MyForm;
