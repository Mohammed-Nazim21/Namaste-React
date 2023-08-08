import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  // Noraml js variable
  // let btnName = "Login";

  let [btnNameReact, setBtnNameReact] = useState("Login");

  // console.log("Herder Rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Food App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              // console.log(btnNameReact); // -> will show "Login" at this stage
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
