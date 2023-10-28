import _ from 'lodash';
import { Fragment, useState } from 'react';
import { HotIcon } from '../icons';
import CategoryButton from './CategoryButton/index';
import style from './style.less';

export default function CategoryMenu({ menuOption = [], defaultKey, onClick, ...props }) {
  const menu = menuOption;
  const selected = defaultKey ?? '';
  const [selectedKey, setSelectedKey] = useState(selected);

  return (
    <div {...props}>
      {_.map(menu, (menuItem, index) => {
        const btn = (
          <CategoryButton
            icon={menuItem?.icon || <HotIcon />}
            desc={menuItem?.text}
            key={menuItem?.key || index}
            selected={selectedKey === menuItem?.key}
            onClick={() => {
              setSelectedKey(menuItem?.key);
              if (onClick) onClick(menuItem?.key);
            }}
          />
        );
        if (menuItem?.divider) {
          return (
            <Fragment key={menuItem?.key}>
              {btn}
              <div className={style.divider}></div>
            </Fragment>
          );
        }
        return btn;
      })}
    </div>
  );
}
