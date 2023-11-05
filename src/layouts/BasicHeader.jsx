import logo from '@/assets/logo.png';
import IAvatar from '@/components/IAvater';
import { FlexAuto, FlexColumn, FlexRow } from '@/components/StyledComponents';
import { useState } from 'react';
import { useDispatch } from 'umi';
import style from './style.less';

export default function BasicHeader() {
  const dispatch = useDispatch();
  const [showUserInfo, setShowUserInfo] = useState(false);

  return (
    <FlexRow className={style.header}>
      <img src={logo} alt="logo" className={style.logo} />
      {/* TODO */}
      <FlexAuto>
        <div className={style.searchInput}></div>
      </FlexAuto>
      <FlexColumn style={{ margin: 'auto', marginRight: 4 }}>
        <IAvatar
          onRegister={{
            onClick: () => {
              dispatch({ type: 'user/save', config: { registerVisible: true } });
            },
          }}
        />
      </FlexColumn>
    </FlexRow>
  );
}
