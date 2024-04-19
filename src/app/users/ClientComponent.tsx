"use client";

import FormAddNewUser from "@/components/FormAddNewUser";
import ServerStaticComponent from "@/components/ServerStaticComponent";
import { useGetlistUSer } from "@/network/queries";
import Link from "next/link";
import React from "react";

const ClientComponent = () => {
  // const [data, setData] = useState([]);
  // const {data: listUser = []} = useGetlistUSer();
  // const getUsers = async () => {
  //   const users = await clientGetUSers();

  //   setData(users);
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  const { data, isLoading } = useGetlistUSer();

  return (
    <div>
      <p className="mb-2">client component</p>
      <ul>
        {isLoading
          ? "Loading..."
          : data?.map((user: any, index: any) => (
              <li key={index}>
                <Link href={`user/${user.userId}`}>{user.name}</Link>
              </li>
            ))}
      </ul>
      {/* <p>{Math.random()}</p> */}
      <div>
        {/* <ServerStaticComponent /> */}
        {/* {component} */}
        <strong>{Math.random()}</strong>
        <FormAddNewUser />
      </div>
    </div>
  );
};

export default ClientComponent;
