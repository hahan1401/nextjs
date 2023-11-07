import FormUpdateUser from '@/components/FormUpdateUser';
import { serverGetTodos } from '@/network/todo';
import { serverGetDetail } from '@/network/user';
import { preload } from '@/utils/serverOnly';


const USerDetail = async ({ params } : {params: any}) => {
  // const user = await serverGetDetail(params.slug);

  preload(params.slug)

  await serverGetTodos()
  const user = await serverGetDetail(params.slug);
  // const user = await preloadDetail(params.slug);
  

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
