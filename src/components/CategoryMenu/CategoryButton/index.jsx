import { FlexRow } from '../../StyledComponents';
import style from './style.less';

const selectedStyle = {
  backgroundColor: 'rgba( 255,255,255 ,.38)',
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
      <FlexRow>
        <div className={style.icon}>{icon}</div>
        <div className={style.text}>{desc}</div>
      </FlexRow>
    </div>
  );
}
