import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { ExamModelState, useHistory, useLocation } from 'umi';

const CategoryMenu: React.FC<{
  categoryList: ExamModelState['categoryList']
}> = ({
  categoryList
}) => {
  const location: any = useLocation();
  const history: any = useHistory();

  return (
    <div className="category">
      <Tabs defaultActiveKey="1" onChange={(val) => {
        (history as any).replace({
          pathname: location.pathname,
          query: {
            ...location.query,
            cid: val
          }
        })
      }}>
        {categoryList.map((it, i) => (
          <Tabs.TabPane tab={it.name} key={i} />
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryMenu;