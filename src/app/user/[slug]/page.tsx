import FormUpdateUser from '@/components/FormUpdateUser';
import { serverGetTodos } from '@/network/todo';
import { serverGetDetail } from '@/network/user';
import { preload } from '@/utils/serverOnly';
import { unstable_after as after } from 'next/server';

const USerDetail = async ({ params } : {params: any}) => {
  console.time(`start_render_with_id=${params.slug}`);
  const user = await serverGetDetail(params.slug);


  after(() => {
    console.timeEnd(`start_render_with_id=${params.slug}`);
  })

  return (
    <div className='flex gap-4'>
      <div className='flex-1'>
        <p>USerDetail server component</p>
        <p>id: {user.userId}</p>
        <p>name: {user.name}</p>
        <strong>{Math.random()}</strong>

        <FormUpdateUser user={user} />
        {/* <UserDetail id={params.slug} /> */}
      </div>
      <div className="flex-1">
        {/* <ClientDetailComponent /> */}
      </div>
    </div>
  );
};

export default USerDetail;
