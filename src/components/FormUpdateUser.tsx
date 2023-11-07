'use client';

import React from 'react';
import { serverUpdateUser } from '@/app/action';

const FormUpdateUser = ({ user, mini }: { user: any, mini?: boolean }) => {
  const onsubmit = async (formData: any) => {
    const newName = formData.get('name').toString();
    try {
    'use server';
    const data = await serverUpdateUser(user.userId, {...user, name: newName});
    } catch (err) {
      console.log('error', err);
    }
  };
  return (
    <form className={!mini ? 'mt-4' : ''} action={onsubmit}>
      {!mini && <label htmlFor='name'>new username: </label>}
      <input type='text' className={`border ${mini ? 'w-30' : ''}`} id='name' name='name' />
      <button className={`ml-2 border bg-slate-300 px-2 ${mini ? '' : 'mt-2'}`}>
        {mini ? 'update' : 'update user'}
      </button>
    </form>
  );
};

export default FormUpdateUser;
