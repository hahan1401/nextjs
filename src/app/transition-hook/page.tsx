'use client';

import React, { useState, useTransition, useEffect } from 'react';

const waitForAwhile = async () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

const page = () => {
  // const [value, setValue] = useState<string>('');
  const [options, setOptions] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();
  const [tab, setTab] = useState(1);

  const getPanelValue = async (searchText: string) => {
    if (searchText) {
      const arr: any = [];
      for (let i = 1; i < 80000; i++) {
        arr.push(searchText);
      }
      // waitForAwhile().then(() => {
      setOptions(arr);
      // });
      console.log('arr: ', arr);
    } else {
      // setOptions([]);
    }
  };

  const changeTag = (tabId: any) => {
    startTransition(() => {
      setTab(tabId);
    })
  }

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.target.value);
  //   getPanelValue(e.target.value);
  // };

  useEffect(() => {
    getPanelValue('text');
  }, []);

  return (
    <>
      <div className='flex gap-4 mb-4'>
        <button
          className={`${tab === 1 ? '' : 'bg-black text-white'} cursor-pointer`}
          onClick={() => changeTag(1)}
        >
          Tab 1
        </button>
        <button
          className={`${tab === 2 ? '' : 'bg-black text-white'} cursor-pointer`}
          onClick={() => changeTag(2)}
        >
          Tab 2
        </button>
        <button
          className={`${tab === 3 ? '' : 'bg-black text-white'} cursor-pointer`}
          onClick={() => changeTag(3)}
        >
          Tab 3
        </button>
      </div>
      {tab === 1 && (
        <div className='flex gap-4'>
          <div>
            <p>tab 1 detail</p>
          </div>
        </div>
      )}
      {tab === 2 && (
        <div className='flex gap-4'>
          <div>
            <input
              type='text'
              // value={value}
              // onChange={onChange}
              className='border'
            />
            <ul>
              {options.map((option, index) => {
                return <li key={index}>{option}</li>;
              })}
            </ul>
          </div>
          <div className='w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin'></div>
        </div>
      )}
      {tab === 3 && (
        <div className='flex gap-4'>
          <p>tab 3 detail</p>
        </div>
      )}
    </>
  );
};

export default page;
