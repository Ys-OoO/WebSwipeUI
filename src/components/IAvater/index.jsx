import defaultAvatar from '@/assets/avatar.png';
import { Dropdown } from 'antd';
import style from './style.less';

export default function IAvatar({ url = defaultAvatar, ...props }) {
  const items = [
    {
      key: 'login',
      label: <>登录</>,
    },
  ];
  return (
    <Dropdown menu={{ items }}>
      <div className={style.avatarBox}>
        <img src={url} alt="avatar" />
      </div>
    </Dropdown>
  );
}
