import request from '@/utils/request';

export async function login(params, conf) {
  return request.post(`/user/login`, params, { noToken: true, ...conf });
}

export async function register(params = {}, conf) {
  //组装视频数据
  const multipartFile = new FormData();
  for (const key in params) {
    multipartFile.append(key, params[key]);
  }
  return request.post(`/user/register`, multipartFile, { noToken: true, ...conf });
}

export async function getCurrentUser(params = {}, conf) {
  return request.get(`/user/current`, params, conf);
}

export async function logout(params = {}, conf) {
  return request.post(`/user/logout`, params, conf);
}