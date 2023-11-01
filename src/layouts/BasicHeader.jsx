import logo from '@/assets/logo.png';
import IAvatar from '@/components/IAvater';
import { FlexAuto, FlexColumn, FlexRow } from '@/components/StyledComponents';
import { useState } from 'react';
import style from './style.less';

export default function BasicHeader() {
  const [showUserInfo, setShowUserInfo] = useState(false);

  return (
    <FlexRow className={style.header}>
      <img src={logo} alt="logo" className={style.logo} />
      {/* TODO */}
      <FlexAuto>
        <div className={style.searchInput}></div>
      </FlexAuto>
      <FlexColumn style={{ margin: 'auto', marginRight: 4 }}>
        <IAvatar />
      </FlexColumn>
    </FlexRow>
  );
}
