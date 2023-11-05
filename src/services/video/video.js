import requestInstance from '@/utils/request';
import qs from 'querystring';


export async function listVideo(params = {}, conf) {
  return requestInstance.get(`/video/list?${qs.stringify(params)}`, { noToken: true, ...conf });
}


export async function uploadVideoFile(params = {}, conf) {
  //组装视频数据
  const multipartFile = new FormData();
  for (const key in params) {
    multipartFile.append(key, params[key]);
  }
  return requestInstance.post(`/video/upload`, multipartFile, { ...conf, timeout: 60000 });
}