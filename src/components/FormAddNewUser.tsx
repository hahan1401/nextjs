'use client';

import React from 'react';
import { serverAddUser, serverUpdateUser } from '@/app/action';
import { QueryClient } from '@tanstack/react-query';
import { clientGetUSers } from '@/network/user';

const FormAddNewUser = () => {
  const queryClient = new QueryClient();
  const onsubmit = async (formData: any) => {
    const newName = formData.get('name').toString();
    try {
      ('use server');
      const data = await serverAddUser({ name: formData.get('name') });
      if (data) {
        const a = await queryClient.invalidateQueries({
          queryKey: ['query-list'],
          exact: true,
          refetchType: 'all',
          type: 'all'
        })
        console.log('queryClient.invalidateQueries', a);
      }
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
