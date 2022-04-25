import "./style.css";
import IMAGE from "./someImg.png";

export const App = () => {
  return (
    <div className="middle">
      <h1>React ts webpack - {process.env.NODE_ENV}</h1>
      <img src={IMAGE} alt="2312" />
    </div>
  );
};
