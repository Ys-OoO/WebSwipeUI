import defaultAvatar from '@/assets/avatar.png';
import style from './style.less';

export default function Avatar({ url = defaultAvatar, className, ...props }) {
  return (
    <div className={style.avatarBox} {...props}>
      <img src={url} alt="avatar" />
    </div>
  );
}
