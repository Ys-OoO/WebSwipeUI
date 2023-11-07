import logo from '@/assets/logo.png';
import IAvatar from '@/components/IAvater';
import { FlexAuto, FlexColumn, FlexRow } from '@/components/StyledComponents';
import { searchVideos } from '@/services/video/video';
import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { history, useDispatch, useSelector } from 'umi';
import style from './style.less';
export default function BasicHeader() {
  const dispatch = useDispatch();
  const { currentUser, showSearch } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch({
      type: 'user/refreshCurrentUser',
    });
  }, []);

  const [value, setValue] = useState('');
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onPressEnter = async () => {
    const res = await searchVideos({ desc: value });
    if (res?.code !== 0) {
      return;
    }
    dispatch({
      type: 'videoWaterfall/change',
      config: {
        videoList: res?.data,
      },
    });
    setValue('');
  };
  return (
    <FlexRow className={style.header}>
      <img src={logo} alt="logo" className={style.logo} />
      <FlexAuto style={{ flex: 1, justifyContent: 'center', marginTop: 8 }}>
        <div className={style.searchInput}>
          {!showSearch || (
            <Input
              placeholder="输入搜索内容，按回车搜索"
              value={value}
              onPressEnter={onPressEnter}
              onChange={onChange}
              prefix={<i className="fas fa-magnifying-glass"></i>}
              size="large"
            />
          )}
        </div>
      </FlexAuto>
      <FlexColumn style={{ margin: 'auto', marginRight: 4 }}>
        <IAvatar
          currentUser={currentUser}
          onRegister={{
            onClick: () => {
              dispatch({ type: 'user/save', config: { registerVisible: true } });
            },
          }}
          onLogin={{
            onClick: () => {
              dispatch({ type: 'user/save', config: { loginVisible: true } });
            },
          }}
          onLogout={{
            onClick: () => {
              dispatch({ type: 'user/save', config: { currentUser: {} } });
              localStorage.removeItem('webSwipeToken');
              history.push('/home');
            },
          }}
          toOwnPage={{
            onClick: () => {
              history.push('/home/own');
            },
          }}
        />
      </FlexColumn>
    </FlexRow>
  );
}
