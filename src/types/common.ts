export interface IMessageEvent<T = unknown> extends Partial<MessageEvent<T>> {
	type?: string;
}

export interface IMessageEventTransform<T = unknown> extends Omit<IMessageEvent<T>, 'data'> {
	data?: T;
}
