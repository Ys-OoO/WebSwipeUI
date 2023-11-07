import defaultAvatar from '@/assets/avatar.png';
import { Dropdown } from 'antd';
import { useMemo } from 'react';
import styled from 'styled-components';
import style from './style.less';

const DropDownItem = styled.div`
  width: 100px;
  text-align: center;
  cursor: pointer !important;
`;

export default function IAvatar({
  onLogin = {},
  onLogout = {},
  onRegister = {},
  toOwnPage = {},
  url = defaultAvatar,
  currentUser,
  needDropDown = true,
  ...props
}) {
  const items = [
    {
      key: 'login',
      label: _.isEmpty(currentUser) ? (
        <DropDownItem onClick={onLogin?.onClick}>登录</DropDownItem>
      ) : undefined,
      disabled: !_.isEmpty(currentUser),
    },
    {
      key: 'logout',
      label: <DropDownItem onClick={onLogout?.onClick}>登出</DropDownItem>,
      disabled: _.isEmpty(currentUser),
    },
    {
      key: 'register',
      label: _.isEmpty(currentUser) ? (
        <DropDownItem onClick={onRegister?.onClick}>注册</DropDownItem>
      ) : undefined,
      disabled: !_.isEmpty(currentUser),
    },
    {
      key: 'personal',
      label: <DropDownItem onClick={toOwnPage?.onClick}>我的</DropDownItem>,
      disabled: _.isEmpty(currentUser),
    },
  ];
  const currentItems = useMemo(() => {
    if (_.isEmpty(currentUser)) {
      return items.filter((item, index) => {
        return item?.key === 'login' || item?.key === 'register';
      });
    } else {
      return items.filter((item, index) => {
        return item?.key === 'logout' || item?.key === 'personal';
      });
    }
  }, [currentUser]);

  return needDropDown === true ? (
    <Dropdown menu={{ items }} style={{ padding: 0 }}>
      <div className={style.avatarBox}>
        <img src={currentUser?.avatarUrl || url} alt="avatar" {...props} />
      </div>
    </Dropdown>
  ) : (
    <div className={style.avatarBox}>
      <img src={currentUser?.avatarUrl || url} alt="avatar" {...props} />
    </div>
  );
}
