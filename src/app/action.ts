'use server';

import { addUser, editUser } from '@/network/user';
import { revalidateTag } from 'next/cache';

export const serverUpdateUser = async (userId: any, data: any) => {
  const res = await editUser(userId, data);  
  if (res) {
    revalidateTag('user-list');
    revalidateTag(`user-${userId}`);
  }
  return res;
}

export const serverAddUser = async (data: any) => {
  const res = await addUser(data);
  if (res) {
    // revalidateTag('user-list');
  }
  return res;
}