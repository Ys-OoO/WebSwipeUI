import defaultAvatar from '@/assets/avatar.png';
import { Dropdown } from 'antd';
import _ from 'lodash';
import { useMemo } from 'react';
import styled from 'styled-components';
import style from './style.less';

const DropDownItem = styled.div`
  width: 100px;
  text-align: center;
`;

export default function IAvatar({
  onLogin = {},
  onLogout = {},
  onRegister = {},
  url = defaultAvatar,
  currentUser,
  ...props
}) {
  const items = useMemo(() => {
    return [
      {
        key: 'login',
        label: _.isEmpty(currentUser) && (
          <DropDownItem onClick={onLogin?.onClick}>登录</DropDownItem>
        ),
      },
      {
        key: 'logout',
        label: !_.isEmpty(currentUser) && (
          <DropDownItem onClick={onLogout?.onClick}>登出</DropDownItem>
        ),
      },
      {
        key: 'register',
        label: _.isEmpty(currentUser) && (
          <DropDownItem onClick={onRegister?.onClick}>注册</DropDownItem>
        ),
      },
    ];
  }, [currentUser]);

  return (
    <Dropdown menu={{ items }}>
      <div className={style.avatarBox}>
        <img src={currentUser?.avatarUrl || url} alt="avatar" />
      </div>
    </Dropdown>
  );
}
