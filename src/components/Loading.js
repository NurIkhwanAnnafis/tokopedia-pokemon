import spinLoading from "../assets/spin.gif";
import catchLoading from "../assets/catch.gif";

const Loading = (props) => {
  const { type } = props;
  const resultSpinLoading = type === 'global' ? spinLoading : catchLoading;

  return (
    <div className="center-content">
      <div className="loading-screen">
        <img width="40" src={resultSpinLoading} alt=""></img>
      </div>
    </div>
  )
}

export default Loading;