import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading = () => {
  
  return (
    <div className="loading-screen">
      <Spin indicator={antIcon} />
    </div>
  )
}

export default Loading;