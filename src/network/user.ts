import _fetch from './fetch'

export const clientGetUSers = async () => {
  return _fetch('user/client', {method: 'GET'}).then(res => res.json());
}


export const serverGetUSers = async () => {
  return _fetch('user/server', {method: 'GET'}).then(res => res.json());
}

export const clientGetDetail = async (id: any, ) => {
  return _fetch(`user/client/${id}`, {method: 'GET'}).then(res => res.json());
}

export const serverGetDetail = async (id: any, ) => {
  return _fetch(`user/server/${id}`, {method: 'GET'}).then(res => res.json());
}

export const editUser = async (id: any, data: any) => {
  return _fetch(`user/${id}`, {method: 'PUT', body: JSON.stringify(data)}).then(res => res.json());
};

export const addUser = async (data: any) => {
  return _fetch(`user/add`, {method: 'POST' , body: JSON.stringify(data)}).then(res => res.json());
};

export const getPostDetail = async () => {
  return _fetch(`https://test.tasmanian.fandelo.com/api/portal/v2/website/News/ricky-ponting`, { method: 'GET' }).then(res => res.json());
};
