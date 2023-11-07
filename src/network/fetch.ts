import { isEmpty, omit } from 'lodash';

const API_URL = 'http://localhost:5151/';
const WEBSITE_ID = process.env.NEXT_PUBLIC_WEBSITE_ID ?? '';
const _fetch = (
	input: RequestInfo | URL,
	init?: RequestInit & { timeout?: number },
) => {
	const baseUrl = typeof input === 'string' && input.startsWith('http')? '' : API_URL;
	const inputWithBaseUrl = typeof input === 'string'
		? baseUrl + input : input;

	const _init: RequestInit = {
		credentials: 'same-origin',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json',
			...init?.headers
		},
		next: init?.next,
		cache: init?.next ? undefined : 'no-cache',
		...omit(init, ['timeout', 'headers', 'next']),
	};

	if (!isEmpty(init?.next)) {
		delete _init.cache
	}

	return fetch(inputWithBaseUrl, { ..._init, ...init })
		.then(res => {
			if (res.status === 401) {
				return { ...res, json: () => new Promise(resolve => resolve({ responseData: undefined }))};
			}
			return res;
		});
};

export default _fetch;
