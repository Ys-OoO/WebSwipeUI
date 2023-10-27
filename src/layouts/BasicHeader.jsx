import { FlexRow } from '@/components/StyledComponents';
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
      <div className={style.searchInput}></div>
      <div className={style.avater}></div>
    </FlexRow>
  );
}
