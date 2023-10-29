import { FlexAuto, FlexColumn, FlexColumnAuto } from '@/components/StyledComponents';
import { Outlet } from 'umi';
import BasicHeader from './BasicHeader';
import BasicSideBar from './BasicSideBar';


export default function Layout() {
  return (
    <FlexColumn style={{height:window.innerHeight,minWidth:1200}}>
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
