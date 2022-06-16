import { getProject, getProjectCategory } from '@/service/project';
import { Space, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import CategoryMenu from './components/CategoryMenu';
import Detail from './components/Detail';
import './index.less';
import { Project } from './types/Project';

export default function IndexPage() {
  const [project, setProjectList] = useState([] as Project[]);

  useEffect(() => {
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
        <CategoryMenu />
        <div className="layout">
          <div className="list">
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
          <Detail />
        </div>
      </div>
    </div>
  );
}
