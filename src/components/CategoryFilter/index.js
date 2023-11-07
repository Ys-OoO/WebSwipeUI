import { Navigate, useParams } from 'umi';
/*
  /home/:category 的wrapper
  当有category参数时跳转到对应分类 否则跳转到默认“热门”分类
*/
export default (props) => {
  const params = useParams();
  if (params?.category === 'own') {
    return <Navigate to="/home/own" />
  }
  if (params?.category) {
    return <Navigate to={`/home/${params.category}`} />;
  } else {
    return <Navigate to="/home/popular" />
  }
}