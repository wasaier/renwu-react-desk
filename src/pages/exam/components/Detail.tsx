import { Space } from 'antd';

const Detail = () => {
  return (
    <div className="detail">
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <div className="card" style={{ height: 200 }}></div>
        <div className="card" style={{ height: 300 }}></div>
      </Space>
    </div>
  );
};

export default Detail;