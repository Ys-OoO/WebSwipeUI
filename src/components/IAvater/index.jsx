import defaultAvatar from '@/assets/avatar.png';
import { Dropdown } from 'antd';
import styled from 'styled-components';
import style from './style.less';

const DropDownItem = styled.div`
  width: 100px;
  text-align: center;
`;

export default function IAvatar({ url = defaultAvatar, ...props }) {
  const items = [
    {
      key: 'login',
      label: <DropDownItem>登录</DropDownItem>,
      //TODO render:
    },
    {
      key: 'logout',
      label: <DropDownItem>登出</DropDownItem>,
      // render:
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
