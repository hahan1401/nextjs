import { serverGetDetail } from '@/network/user'
import { cache } from 'react'
import 'server-only'
 
export const preload = (id: string) => {
  void preloadDetail(id)
}
 
export const preloadDetail = cache(async (id: string) => {
  const data = await serverGetDetail(id);
  return data;
})