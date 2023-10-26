import { FlexAuto, FlexColumn, FlexColumnAuto } from '@/components/StyledComponents';
import { Outlet } from 'umi';
import BasicHeader from './BasicHeader';
import BasicSideBar from './BasicSideBar';


export default function Layout() {
  return (
    <FlexColumn style={{height:'100vh',minWidth:1200}}>
      <BasicHeader />
      <FlexAuto>
        <BasicSideBar />
        <FlexColumnAuto>
          <Outlet />
        </FlexColumnAuto>
      </FlexAuto>
    </FlexColumn>
  );
}
