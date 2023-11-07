import _fetch from './fetch';

export const serverGetTodos = async () => {
  return _fetch('todo/server', {method: 'GET'}).then(res => res.json());
}