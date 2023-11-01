import { FlexAuto, FlexColumn, FlexColumnAuto } from '@/components/StyledComponents';
import { useEffect } from 'react';
import { Outlet, useDispatch } from 'umi';
import BasicHeader from './BasicHeader';
import BasicSideBar from './BasicSideBar';


export default function Layout() {
  const dispatch = useDispatch();
  //请求分类数据
  useEffect(() => {
    dispatch({
      type:"menu/refreshCategory",
    })
  }, [])
  
  
  return (
    <FlexColumn style={{height:"100vh"}}>
      <BasicHeader />
      <FlexAuto>
        <BasicSideBar />
        <FlexColumnAuto 
        style={{ backgroundImage:"linear-gradient(60deg,#161823 0%, #161823 100%)", padding:16}}
        >
          <Outlet/>
        </FlexColumnAuto>
      </FlexAuto>
    </FlexColumn>
  );
}
