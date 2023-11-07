/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useState } from 'react';

const page = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const login = async () => {
    const payload = {
      username,
      password,
    };
    try {
      const response = await fetch('http://localhost:5151/login', {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  const loginWithFaceBook = async () => {
    try {
      const response = await fetch('http://localhost:5151/auth/facebook', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'content-type': 'application/json',
        },
      });
      console.log(response);
    } catch (error) {
      console.log('Error----', error);
    }
  };
  return (
    <div>
      {/* <form onSubmit={login}> */}
      <label htmlFor='username'>username: </label>
      <input
        className='border'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type='text'
        name='username'
        id='username'
      />
      <label htmlFor='password'>password: </label>
      <input
        className='border'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='text'
        name='password'
        id='password'
      />
      <button onClick={() => void login()}>Login</button>
      {/* </form> */}
      <button onClick={() => void loginWithFaceBook()}>
        Login with Facebook
      </button>
    </div>
  );
};

export default page;
