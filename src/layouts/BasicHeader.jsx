import Avatar from '@/components/Avater';
import { FlexAuto, FlexColumn, FlexRow } from '@/components/StyledComponents';
import { LogoIcon } from '@/components/icons';
import style from './style.less';

export default function BasicHeader() {
  return (
    <FlexRow className={style.header}>
      <FlexRow className={style.logoBox}>
        <LogoIcon />
        <span className={style.name}>Web Swipe</span>
      </FlexRow>
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
