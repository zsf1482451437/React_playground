import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classNames.bind(styles);

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <div className={cn('tab_container')}>
      <div className={cn('tabs')}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={cn({ active: activeTab === tab.key })}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={cn('tab_content')}>
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className={cn('tab_panel', { active: activeTab === tab.key })}
          >
            {activeTab === tab.key && tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

Tab.type = 'component';

export default Tab;
