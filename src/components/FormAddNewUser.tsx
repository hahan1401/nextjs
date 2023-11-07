'use client';

import React from 'react';
import { serverAddUser, serverUpdateUser } from '@/app/action';

const FormAddNewUser = () => {
  const onsubmit = async (formData: any) => {
    const newName = formData.get('name').toString();
    try {
      ('use server');
      const data = await serverAddUser({ name: formData.get('name') });
    } catch (err) {
      console.log('error', err);
    }
  };
  return (
    <form className='mt-4' action={onsubmit}>
      <label htmlFor='name'>new username: </label>
      <input type='text' className='border' id='name' name='name' />
      <button className='ml-2 border bg-slate-300 px-2 mt-2'>add user</button>
    </form>
  );
};

export default FormAddNewUser;
