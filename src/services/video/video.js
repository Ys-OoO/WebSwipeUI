import request from '@/utils/request';
import qs from 'querystring';


export async function listVideo(params = {}, conf) {
  return request.get(`/video/list?${qs.stringify(params)}`, conf);
}