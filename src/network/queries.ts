import { useQuery } from '@tanstack/react-query';
import { clientGetDetail, clientGetUSers } from './user';

export const useGetlistUSer = () => useQuery({
  queryKey:['query-list'],
  queryFn:() => clientGetUSers(),
});

export const useGetUSerDetail = (userId: any) => useQuery({
  
  queryKey: ['query-detail', userId],
  queryFn: () => clientGetDetail(userId),
});