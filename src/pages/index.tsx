import { getProject, getProjectCategory } from '@/service/project';
import { Space, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import './index.less';

interface ProjectCategory {
  name: string;
  id: number;
}

interface Project {
  title: string;
}

export default function IndexPage() {
  const [categoryList, setCategoryList] = useState([] as ProjectCategory[]);
  const [project, setProjectList] = useState([] as Project[]);

  useEffect(() => {
    getProjectCategory().then(({ data }) => {
      setCategoryList(data.data.list);
    });
    getProject().then(({ data }) => {
      setProjectList(data.data.list);
    });
  }, []);

  return (
    <div className="page-index">
      <div className="navbar">
        <div className="header">
          <Space style={{ display: 'flex' }}>
            <div>需求大厅</div>
            <div>面试专题</div>
            <div>讨论社区</div>
          </Space>
          <Space>
            <div>个人中心</div>
          </Space>
        </div>
      </div>

      <div className="container">
        <div className="main">
          <Tabs defaultActiveKey="1">
            {categoryList.map((it, i) => (
              <Tabs.TabPane tab={it.name} key={i} />
            ))}
          </Tabs>

          <div className="project">
            {project.map((it, i) => {
              return (
                <div>
                  {i + 1}. {it.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
