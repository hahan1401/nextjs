import { serverGetTodos } from '@/network/todo';
import Link from 'next/link';
import React from 'react';

const TodoList = async () => {
  const todos = await serverGetTodos();
  return (
    <div className='todo border-t mt-4 bg-slate-200'>
      <strong>Todo List</strong>
      <ul className='bg-white'>
        {todos.map((todo: any, index: any) => (
          <li key={index} className='flex justify-between mb-2'>
            <Link
              href={`todo/${todo.todoId}`}
              className={todo.status ? 'text-green-500' : ''}
            >
              {todo.todoName}
            </Link>
            {/* <FormUpdateTodo todo={todo} mini={true} /> */}
          </li>
        ))}
      </ul>

      <strong>{Math.random()}</strong>
    </div>
  );
};

export default TodoList;
