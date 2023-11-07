'use client';

import ServerStaticComponent from '@/components/ServerStaticComponent';
import { useGetlistUSer } from '@/network/queries';
import Link from 'next/link';
import React from 'react';

const ClientComponent = ({component} : {component: React.ReactNode}) => {
  // const [data, setData] = useState([]);
  const {data: listUser = []} = useGetlistUSer();
  // const getUsers = async () => {
  //   const users = await clientGetUSers();
    
  //   setData(users);
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <div>
      <p className='mb-2'>client component</p>
      <ul>
        {listUser?.map((user: any, index: any) => (
          <li key={index}>
            <Link href={`user/${user.userId}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      {/* <p>{Math.random()}</p> */}
      <div>
        {/* <ServerStaticComponent /> */}
        {component}
      </div>
    </div>
  );
};

export default ClientComponent;
