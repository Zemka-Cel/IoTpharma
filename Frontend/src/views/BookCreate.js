import React from 'react';
import books from '../service/api';
import MyForm from './MyForm';

const BookCreate = ({ history }) => {

  const onSubmit = async (values) => {
    console.log(values);
    await books.post('/books', values);
    history.push('/');
  }

  return (
    <div>
      <h1>Create Book</h1>
      <MyForm onSubmit={onSubmit} />
    </div>
  );
}

export default BookCreate;