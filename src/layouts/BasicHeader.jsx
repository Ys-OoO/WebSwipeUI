import logo from '@/assets/logo.png';
import Avatar from '@/components/Avater';
import { FlexAuto, FlexColumn, FlexRow } from '@/components/StyledComponents';
import style from './style.less';

export default function BasicHeader() {
  return (
    <FlexRow className={style.header}>
      <img src={logo} alt="logo" className={style.logo} />
      {/* TODO */}
      <FlexAuto>
        <div className={style.searchInput}></div>
      </FlexAuto>
      <FlexColumn style={{ margin: 'auto', marginRight: 4 }}>
        <Avatar />
      </FlexColumn>
    </FlexRow>
  );
}
