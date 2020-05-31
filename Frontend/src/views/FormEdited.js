import React from 'react';
import shelveOne from '../service/api';
import Form from './FormOne';

const FormEdited = ({ history }) => {

  const onSubmit = async (values) => {
    console.log(values);
    await shelveOne.put('/shelveOne/1', values);
    history.push('/');
  }

  return (
    <div>
     
      <Form onSubmit={onSubmit} />
    </div>
  );
}

export default FormEdited;