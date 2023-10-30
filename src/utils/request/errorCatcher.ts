import { message, notification } from 'antd';
import { AxiosResponse } from 'axios';

export type Response<T = unknown> = {
  code?: number;
  status?: number;
  msg?: string;
  data: T;
};

const HttpErrorList: Record<number, string> = {
  1: '网络异常',
  404: '请求地址错误或后端接口未部署',
  403: '没有相关权限',
  401: '登录状态过期, 需要重新登录',
  500: '后端服务有未处理的错误',
  502: '后端接口无响应',
  504: '请求超时, 可能是网络问题, 请稍后重试',
};

const errorMessage = 'error Catecher: 请求出错, 请联系管理员(ys0514@yeah.net)排查';

function errorCatcher(
  isHttpError: boolean,
  response?: AxiosResponse<Response>,
  hasMessage = false,
): void {
  if (!isHttpError) {
    //主动报错
    const status = response?.status;
    const baseMessage = 'return error';
    if (!hasMessage) {
      notification.error({
        message: baseMessage,
        description: response?.data?.msg || HttpErrorList[status || 1],
      });
    } else {
      console.error(errorMessage);
    }
  } else {
    //接口异常报错
    const data = response?.data;
    const baseMessage = 'interface error';
    if (!hasMessage) {
      if (data?.code && data.code >= 103) {
        message.error(data?.msg || errorMessage);
        return;
      }
      notification.error({
        message: baseMessage,
        description: response?.data?.msg || errorMessage,
      });
    } else {
      console.error(errorMessage);
    }
  }
}

export default errorCatcher;
