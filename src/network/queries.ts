import { useQuery } from '@tanstack/react-query';
import { clientGetDetail, clientGetUSers } from './user';

export const useGetlistUSer = () => useQuery(
  ['query-list'],
  () => clientGetUSers(),
  {
    cacheTime: 15 * 1000,
    staleTime: 15 * 1000,
  }
);

export const useGetUSerDetail = (userId: any) => useQuery(
  ['query-detail', userId],
  () => clientGetDetail(userId),
  {
    cacheTime: 15 * 1000,
    staleTime: 15 * 1000,
  }
);