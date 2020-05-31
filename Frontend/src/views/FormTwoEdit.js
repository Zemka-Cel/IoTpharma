import React from 'react';
import shelveTwo from '../service/api';
import Form from './FormTwo';

const FormTwoEdit = ({ history }) => {

  const onSubmit = async (values) => {
    console.log(values);
    await shelveTwo.put('/shelveTwo/1', values);
    history.push('/');
  }

  return (
    <div>
     
      <Form onSubmit={onSubmit} />
    </div>
  );
}

export default FormTwoEdit;