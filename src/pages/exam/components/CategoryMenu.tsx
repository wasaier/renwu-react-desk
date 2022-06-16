import { getProjectCategory } from '@/service/project';
import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { ProjectCategory } from '../types/ProjectCategory';

const CategoryMenu = () => {
  const [categoryList, setCategoryList] = useState([] as ProjectCategory[]);

  useEffect(() => {
    getProjectCategory().then(({ data }) => {
      setCategoryList(data.data.list);
    });
  }, []);

  return (
    <div className="category">
      <Tabs defaultActiveKey="1">
        {categoryList.map((it, i) => (
          <Tabs.TabPane tab={it.name} key={i} />
        ))}
      </Tabs>
    </div>
  );
};

export default CategoryMenu;