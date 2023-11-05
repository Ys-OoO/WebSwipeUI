import request from '@/utils/request';

export async function register(params = {}, conf) {
  //组装视频数据
  const multipartFile = new FormData();
  for (const key in params) {
    multipartFile.append(key, params[key]);
  }
  return request.post(`/user/register?`, multipartFile, { ...conf, timeout: 60000 });
}