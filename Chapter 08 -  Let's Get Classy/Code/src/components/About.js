import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor called");
  }

  componentDidMount() {
    // console.log("Parent component DidMount");
  }

  render() {
    // console.log("Parent render called");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        {/* <User name={"Nazim (function)"} /> */}
        <UserClass name={"First (class)"} location={"Goa class"} />
        {/* <UserClass name={"Second"} location={"UK"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       {/* <User name={"Nazim (function)"} /> */}
//       <UserClass name={"Nazim (class)"} location={"Goa class"} />
//     </div>
//   );
// };

export default About;
