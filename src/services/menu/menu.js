import request from '@/utils/request';


export async function listCategories(params = {}, conf) {
  return request.get(`/video/listcategories`, conf);
}