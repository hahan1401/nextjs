'use client';
import { useServerListenerEvent } from '@/hooks/useServerListenerEvent';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
const CoreProvider = ({ children }: { children: ReactNode }) => {
	useServerListenerEvent();
  const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
						staleTime: 30 * 1000,
					},
				},
			}),
	);
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default CoreProvider;
