import React from 'react';
import { useForm } from 'react-hook-form';
import './form.scss';

const onSubmit = (data) => {
  console.log(data);
};

const Form = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className='form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className='searchbar'
          name='name'
          ref={register}
          placeholder='😳   type emoji'
        />
        <input className='button' type='submit' />
      </form>
    </div>
  );
};

export default Form;
