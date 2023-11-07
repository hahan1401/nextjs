import FormAddNewUser from '@/components/FormAddNewUser'
import FormUpdateUser from '@/components/FormUpdateUser'
import Link from 'next/link'
import ClientComponent from './ClientComponent'

const loading = () => ( <>loading page...</>
  // <div className='container flex gap-4'>
  //   <div className='flex-1'>
  //     <div>
  //       <p className='mb-2'>server component</p>
  //       <ul>
  //         {(Array(5).fill(0)).map((user: any, index: any) => (
  //           <li key={index} className='flex justify-between mb-2'>
  //             <Link href={`user/${user.userId}`}>{user.name}</Link>
  //             <FormUpdateUser user={user} mini={true} />
  //           </li>
  //         ))}
  //       </ul>
  //       <strong>{Math.random()}</strong>
  //       <FormAddNewUser />
  //     </div>
  //     <div className='todo border-t mt-4 bg-slate-200'>
  //       <strong>Todo List</strong>
  //       <ul className='bg-white'>
  //         {(Array(0).fill(0)).map((todo: any, index: any) => (
  //           <li key={index} className='flex justify-between mb-2'>
  //             <Link
  //               href={`todo/${todo.todoId}`}
  //               className={todo.status ? 'text-green-500' : ''}
  //             >
  //               {todo.todoName}
  //             </Link>
  //             {/* <FormUpdateTodo todo={todo} mini={true} /> */}
  //           </li>
  //         ))}
  //       </ul>
        
  //       <strong>{Math.random()}</strong>
  //     </div>
  //   </div>
  //   <div className='flex-1'>
  //     <ClientComponent />
  //   </div>
  // </div>
)

export default loading;