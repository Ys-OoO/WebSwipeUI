import { FlexRow } from '../../StyledComponents';
import style from './style.less';

const selectedStyle = {
  backgroundColor: 'rgba( 242,242,243 ,.08)',
  color: '#fff',
};

export default function CategoryButton({ icon, desc, selected, onClick, ...props }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div
      className={style.categoryBox}
      style={selected ? selectedStyle : undefined}
      onClick={handleClick}
      {...props}
    >
      <FlexRow style={{ justifyContent: 'center', alignItems: 'center' }}>
        <i class="fas fa-angle-right" style={{ marginRight: 8 }}></i>
        <div className={style.text}>{desc}</div>
      </FlexRow>
    </div>
  );
}
