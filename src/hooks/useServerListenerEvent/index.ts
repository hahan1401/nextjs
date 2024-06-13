'use client';

import { useEffect, useRef, useState } from 'react';
import Eventsource from 'eventsource';

import { IMessageEvent, IMessageEventTransform } from '@/types/common';

interface OpenEventSourceOptions {
	onOpenSuccess?: () => void;
	onOpenFailed?: () => void;
}

export const useServerListenerEvent = <T>(
) => {
	const eventSource = useRef<Eventsource | null>(null);
	const [latestEventsReceived, setlatestEventsReceived] = useState<IMessageEventTransform<T>[]>([]);

	// useEffect(() => {
	// 	if (!eventSource.current) {
	// 		eventSource.current = new Eventsource(`http://localhost:5151/sse`, {
	// 		});
	// 	}

	// 	eventSource.current.addEventListener('message', (e: IMessageEvent<string>) => {
	// 		console.log('=============================', e);
	// 		setlatestEventsReceived([
	// 			...latestEventsReceived,
	// 			{ ...e, data: JSON.parse(e.data ?? '') as IMessageEventTransform<T>['data'] },
	// 		]);
	// 	});
	// });

	return {
		latestEventsReceived,
		eventSource: eventSource.current,
		isOpen: !!eventSource.current,
	};
};
