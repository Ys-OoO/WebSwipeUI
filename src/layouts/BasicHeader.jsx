import logo from '@/assets/logo.png';
import IAvatar from '@/components/IAvater';
import { FlexAuto, FlexColumn, FlexRow } from '@/components/StyledComponents';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'umi';
import style from './style.less';

export default function BasicHeader() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch({
      type: 'user/refreshCurrentUser',
    });
  }, []);
  return (
    <FlexRow className={style.header}>
      <img src={logo} alt="logo" className={style.logo} />
      <FlexAuto>
        <div className={style.searchInput}></div>
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
            },
          }}
        />
      </FlexColumn>
    </FlexRow>
  );
}
