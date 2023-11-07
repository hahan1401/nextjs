import { serverGetDetail } from '@/network/user';
import FormUpdateUser from './FormUpdateUser';
import 'server-only'
import { preloadDetail } from '@/utils/serverOnly';

export default async function UserDetail({ id }: { id: string }) {
  const user = await preloadDetail(id);
  return (
    <>
      <p>USerDetail server component</p>
      <p>id: {user.userId}</p>
      <p>name: {user.name}</p>
      <strong>{Math.random()}</strong>

      <FormUpdateUser user={user} />
    </>
  );
}
