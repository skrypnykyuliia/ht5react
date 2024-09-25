import styles from "../styles/styles.css";
import Buttons from "./ButtonComponent";

function Main() {
  return (
    <div className="main">
      <h1 className="title">LIFE IS WASTED ON THE LIVING</h1>
      <p className="text">
        Sign in <br />
        with
      </p>
      <Buttons />
    </div>
  );
}

export default Main;