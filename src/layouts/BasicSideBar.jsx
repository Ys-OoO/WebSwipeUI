import CategoryMenu from '@/components/CategoryMenu';
import { FlexColumn } from '@/components/StyledComponents';
import { useEffect, useState } from 'react';
import { history, useSelector } from 'umi';
import style from './style.less';

export default function BasicSideBar() {
  const { menuOption } = useSelector((state) => state.menu);
  const [selected, setSelected] = useState('popular');

  const onClick = (key) => {
    history.push('/home/' + key);
  };

  useEffect(() => {
    //TODO 获取分类信息并生成相应的分类
    // setMenuOption()
  }, []);

  return (
    <FlexColumn className={style.sidebar}>
      <CategoryMenu
        menuOption={menuOption}
        defaultKey={selected}
        onClick={onClick}
        style={{ marginTop: 16 }}
      />
    </FlexColumn>
  );
}
