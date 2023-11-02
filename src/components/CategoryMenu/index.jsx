import _ from 'lodash';
import { Fragment, useState } from 'react';
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
            icon={menuItem?.icon}
            desc={menuItem?.text}
            key={menuItem?.categoryKey || index}
            selected={selectedKey === menuItem?.categoryKey}
            onClick={() => {
              setSelectedKey(menuItem?.categoryKey);
              if (onClick) onClick(menuItem?.categoryKey);
            }}
          />
        );
        if (menuItem?.divider) {
          return (
            <Fragment key={menuItem?.categoryKey}>
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
