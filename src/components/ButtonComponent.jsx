import styles from "../styles/button.css";
import apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import x from "../assets/x.svg";

function Buttons() {
  return (
    <div className="btnBox">
      <button>
        <img src={apple} alt="apple" className="btn" />
      </button>
      <button>
        <img src={google} alt="google" className="btn" />
      </button>
      <button>
        <img src={x} alt="x" className="btn" />
      </button>
    </div>
  );
}
export default Buttons;