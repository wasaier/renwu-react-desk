import { getProject, getProjectCategory } from '@/service/project';
import { PageLoading } from '@ant-design/pro-layout';
import { Space, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'umi';
import CategoryMenu from './components/CategoryMenu';
import Detail from './components/Detail';
import './index.less';
import { Project } from './types/Project';

export default function IndexPage() {
  const [project, setProjectList] = useState([] as Project[]);
  const location: any = useLocation()
  const queryProjectId = location.query.qid;

  useEffect(() => {
    getProject().then(({ data }) => {
      setProjectList(data.data.list);
    });
  }, []);

  if (!project.length) {
    return <PageLoading />
  }

  return (
    <div className="page-exam">
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
                  <div className='item'>
                    <Link to={`/exam?qid=${it.id}`}>
                      {it.id > 9 ? it.id : `0${it.id}`}. {it.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <Detail projectId={queryProjectId ? queryProjectId : project?.[0]?.id} />
        </div>
      </div>
    </div>
  );
}
