'use client';

import { useGetUSerDetail } from '@/network/queries';
import { editUser } from '@/network/user';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const ClientDetailComponent = () => {
  const pathname = usePathname();
  const userId = pathname.split('/')[2];
  const [detail, setDetail] = useState<any>();
  const [isEditingInline, setIsEditingInline] = useState(false);

  // const getDetail = async () => {
  //   const user = await clientGetDetail(userId, {next: {tags: ['user-detail']}});
  //   setDetail(user);
  // };

  const {data} = useGetUSerDetail(userId)
  

  const updateUSername = async () => {
    const data = await editUser(userId, { name: detail?.name });
  };

  // useEffect(() => {
  //   getDetail();
  // }, []);

  return (
    <div>
      <p>USerDetail client component</p>
      <p>id: {data?.userId}</p>
      {isEditingInline ? (
        <div className='flex gap-2'>
          <input
            value={detail?.name}
            onChange={(e) => setDetail({ ...detail, name: e.target.value })}
          />
          <button className='border bg-gray-100 px-4' onClick={updateUSername}>update</button>
        </div>
      ) : (
        <div className='flex gap-2'>
          <p>name: {data?.name}</p>
          <button className='border bg-gray-100 px-4' onClick={() => setIsEditingInline(true)}>edit</button>
        </div>
      )}
      {/* <p>{Math.random()}</p> */}
    </div>
  );
};

export default ClientDetailComponent;
