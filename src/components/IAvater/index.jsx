import defaultAvatar from '@/assets/avatar.png';
import { Dropdown } from 'antd';
import styled from 'styled-components';
import style from './style.less';

const DropDownItem = styled.div`
  width: 100px;
  text-align: center;
`;

export default function IAvatar({ onLogin, onLogout, onRegister, url = defaultAvatar, ...props }) {
  const items = [
    {
      key: 'login',
      label: <DropDownItem onClick={onLogin?.onClick}>登录</DropDownItem>,
      render: onLogin?.render,
    },
    {
      key: 'logout',
      label: <DropDownItem onClick={onLogout?.onClick}>登出</DropDownItem>,
      render: onLogout?.render,
    },
    {
      key: 'register',
      label: <DropDownItem onClick={onRegister?.onClick}>注册</DropDownItem>,
      render: onRegister?.render,
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
