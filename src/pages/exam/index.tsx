import { PageLoading } from '@ant-design/pro-layout';
import { Empty, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect, ExamModelState, Link, useDispatch, useLocation } from 'umi';
import Detail from './components/FDetail';
import CategoryMenu from './components/FCategoryMenu';
import { Project } from './types/Project';
import { ProjectCategory } from './types/ProjectCategory';
import './index.less';

const ExamPage: React.FC<ExamModelState> = ({
  categoryList,
  projectList,
  project,
}) => {
  const location: any = useLocation();
  const dispatch = useDispatch();
  const queryProjectId = location.query.qid;
  const queryCategoryId = location.query.cid;

  useEffect(() => {
    if (!categoryList.length) {
      dispatch({
        type: 'exam/queryCategory',
      });
    }
  }, []);

  useEffect(() => {
    if (categoryList.length) {
      dispatch({
        type: 'exam/queryProject',
        payload: {
          categoryId: queryCategoryId ? queryCategoryId : categoryList[0].id,
        },
      });
    }
  }, [categoryList, queryCategoryId]);

  useEffect(() => {
    if (queryProjectId) {
      dispatch({
        type: 'exam/queryDetail',
        payload: {
          projectId: queryProjectId,
        },
      });
    }
  }, [queryProjectId]);

  const renderMain = () => {
    if (!project) {
      return (
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            background: '#fff',
            justifyContent: 'center'
          }}
        >
          <Empty />
        </div>
      );
    }

    return (
      <div className="layout">
        <div className="list">
          <div className="project">
            {projectList.map((it, i) => {
              return (
                <div className="item">
                  <Link to={`/exam?qid=${it.id}`}>
                    {it.id > 9 ? it.id : `0${it.id}`}. {it.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <Detail project={project} />
      </div>
    );
  };

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
        <CategoryMenu categoryList={categoryList} />
        {renderMain()}
      </div>
    </div>
  );
};

export default connect((model: any) => {
  return {
    ...model.exam,
  };
})(ExamPage);
