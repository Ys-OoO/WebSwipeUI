import IAvatar from '@/components/IAvater';
import { FlexColumnAuto, FlexRow } from '@/components/StyledComponents';
import OwnVideoList from '@/pages/Own/OwnVideoList/OwnVideoList';
import { Tabs } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'umi';
import style from './style.less';
// import {useEffect} from 'react'

const TabItem = styled.div`
  font-size: 24px;
  color: #fff;
`;
export default function Own() {
  const { currentUser } = useSelector((state) => state.user);
  const [currentTab, setCurrentTab] = useState('published');

  const onTabChange = (activeKey) => {
    setCurrentTab(activeKey);
  };

  const tabs = [
    {
      label: <TabItem>我的</TabItem>,
      key: 'published',
      children: <OwnVideoList currentTab={currentTab} />,
    },
    {
      label: <TabItem>喜欢</TabItem>,
      key: 'like',
      children: <OwnVideoList currentTab={currentTab} />,
    },
    {
      label: <TabItem>收藏</TabItem>,
      key: 'collected',
      children: <OwnVideoList currentTab={currentTab} />,
    },
  ];
  return (
    <FlexColumnAuto style={{ color: '#fff' }}>
      <FlexRow className={style.infoBox}>
        <div className={style.avatarBox}>
          <IAvatar currentUser={currentUser} style={{ maxWidth: 80 }} needDropDown={false} />
        </div>
        <div>{currentUser?.username}</div>
      </FlexRow>
      <Tabs
        destroyInactiveTabPane
        items={tabs}
        size="large"
        style={{ color: '#fff' }}
        centered
        activeKey={currentTab}
        tabBarGutter={100}
        onChange={onTabChange}
        tabBarStyle={{
          backgroundColor: 'rgba(255, 255, 255, 40%)',
          fontSize: '50px',
          color: '#fff',
        }}
      />
    </FlexColumnAuto>
  );
}
