import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import spinLoading from "../assets/spin.gif";
import catchLoading from "../assets/catch.gif";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Loading = (props) => {
  const { type } = props;
  const resultSpinLoading = type === 'global' ? spinLoading : catchLoading;

  return (
    <div className="loading-screen">
      <img width="40" src={resultSpinLoading} alt=""></img>
    </div>
  )
}

export default Loading;