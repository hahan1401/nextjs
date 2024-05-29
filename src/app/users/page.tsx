import React, { Suspense } from "react";
import ClientComponent from "./ClientComponent";
import Link from "next/link";
import FormAddNewUser from "@/components/FormAddNewUser";
import FormUpdateUser from "@/components/FormUpdateUser";
import { serverGetTodos } from "../../network/todo";
import TodoList from "@/components/TodoList";
import { clientGetUSers, getPostDetail, serverGetDetail, serverGetUSers } from "@/network/user";
import {
  HydrationBoundary,
  Mutation,
  Query,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { unstable_after as after } from 'next/server';

export const preload = (id: number) => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
  void serverGetDetail(id)
}

const UsersPage = async () => {

  console.time(`start_render`);
  preload(1)
  const users = await serverGetUSers();
  // const todos = await serverGetTodos();
  console.log("==============re-render================");

  // Wait for the promises to resolve
  // const [users] = await Promise.all([serverGetUSers(), getPostDetail()]);

  const queryClient = new QueryClient();
  // const params = decodeQueryParams(paramStaffConfigMap, { pageSize: '20', pageIndex: '0', ...searchParams });
  // await queryClient.prefetchQuery({
  //   queryKey: ["query-list"],
  //   queryFn: () => clientGetUSers(),
  // });

  const user = await serverGetDetail(1)


  after(() => {
    console.timeEnd(`start_render`);
  })

  return (
    <div className="container flex gap-4">
      <div className="flex-1">
        <div>
          <p className="mb-2">server component</p>
          <ul>
            {users.map((user: any, index: any) => (
              <li key={index} className="flex justify-between mb-2">
                <Link href={`user/${user.userId}`}>{user.name}{'     '} <strong>{user.userId}</strong></Link>
                <FormUpdateUser user={user} mini={true} />
              </li>
            ))}
          </ul>
          <strong>{Math.random()}</strong>
          <FormAddNewUser />
        </div>
        {/* <Suspense fallback={<p className='bg-slate-100'>loading todos...</p>}>
          <div className='todo border-t mt-4 bg-slate-200'>
            <strong>Todo List</strong>
            <TodoList />
          </div>
        </Suspense> */}
      </div>
      <div className="flex-1">
        {/* <HydrationBoundary state={dehydrate(queryClient, {
				shouldDehydrateMutation: (mutation: Mutation) => {
					console.log('mutation', mutation);
					return true;
				},
        shouldDehydrateQuery: (query: Query) => {
          console.log('query', query);
          return true;
        }
			})}>
        <ClientComponent component={<TodoList/>} />
    </HydrationBoundary> */}
        <ClientComponent />
      </div>
    </div>
  );
};

export default UsersPage;
