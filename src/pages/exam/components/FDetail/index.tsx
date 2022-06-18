import { Space } from 'antd';
import { FC, useEffect, useState } from 'react';
import { Project } from '../../types/Project';
import FComment from '../FComment';

const Detail: FC<{
  project: Project;
}> = ({ project: detail }) => {
  return (
    <div className="detail">
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <div className="card" style={{ height: 200 }}>
          <div>{detail.title}</div>
          <div>{detail.description}</div>
        </div>
        <FComment />
      </Space>
    </div>
  );
};

export default Detail;
