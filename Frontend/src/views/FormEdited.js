import React from 'react';
import shelveOne from '../service/api';
import Form from './FormOne';

const FormEdited = ({ history }) => {

  const onSubmit = async (values) => {
    console.log(values);
    await shelveOne.post('/shelveOne', values);
    history.push('/');
  }

  return (
    <div>
      <h1>Create Book</h1>
      <Form onSubmit={onSubmit} />
    </div>
  );
}

export default FormEdited;