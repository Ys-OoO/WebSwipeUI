import CategoryMenu from '@/components/CategoryMenu';
import { FlexAuto, FlexColumn } from '@/components/StyledComponents';
import VideoUpload from '@/pages/VideoUpload';
import { Button } from 'antd';
import { history, useDispatch, useParams, useSelector } from 'umi';
import style from './style.less';

export default function BasicSideBar() {
  const { menuOption } = useSelector((state) => state.menu);
  const dispatch = useDispatch();
  const params = useParams();
  const onClick = (key) => {
    history.push('/home/' + key);
  };

  return (
    <FlexColumn className={style.sidebar}>
      <CategoryMenu
        menuOption={menuOption}
        defaultKey={params?.category || 'popular'}
        onClick={onClick}
        style={{ marginTop: 16 }}
      />
      <FlexAuto />
      <Button
        ghost
        danger
        style={{ margin: 4 }}
        onClick={() => {
          dispatch({
            type: 'videoUpload/save',
            config: { visible: true },
          });
        }}
      >
        发布视频
      </Button>
      <VideoUpload />
    </FlexColumn>
  );
}
