import { getProjectDetail } from '@/service/project';
import { Space } from 'antd';
import { useEffect, useState } from 'react';
import { Project } from '../types/Project';

const Detail = () => {
  const [detail, setDetail] = useState({} as Project);

  useEffect(() => {
    getProjectDetail({ projectId: 1 }).then(res=> {
      setDetail(res.data.data)
    })
  }, [])
  return (
    <div className="detail">
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <div className="card" style={{ height: 200 }}>
          <div>{detail.title}</div>
          <div>{detail.description}</div>
        </div>
        <div className="card" style={{ height: 300 }}></div>
      </Space>
    </div>
  );
};

export default Detail;