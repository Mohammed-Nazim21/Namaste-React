// How to write class based component
import React from "react";

// extends React.Componet will let React know that UserClass is a class based componet
// now React will start tracking it
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    // this.state = {
    //   count: 0,
    //   count2: 2,
    // };
    console.log(this.props.name + "Child Constructor called");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  //earliar we used write code like this

  async componentDidMount() {
    console.log(this.props.name + "Child component DidMount");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    // Destructing props
    // const { name, location } = this.props;
    // Destructing state
    // const { count, count2 } = this.state;

    console.log(this.props.name + "Child render called");

    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <div className="user-card">
        {/* <h1>Count = {this.state.count}</h1> */}
        {/* <h1>Count = {count}</h1> */}
        {/* <h1>Count2 = {count2}</h1> */}
        {/* <button
          onClick={() => {
            // NEVER UPDATE STATE VARIABLES DIRECTLY
            // this.state.count = this.state.count + 1; -> NEVER DO THIS
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url} alt="avatar" />
        {/* <h2>{this.props.name}</h2> */}
        <h2>{name}</h2>
        {/* <h3>Location: {this.props.location}</h3> */}
        <h3>Location: {location}</h3>
        <h4>Contact: @nazim</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * --- MOUNTING ---
 *
 * Constructor (dummy data)
 * Render (dummy data)
 *        < HTML Dummy >
 * Component Did Mount
 *        < API Call >
 *        <this.setState> --> state variable is update
 *
 * --- UPDATING ---
 *
 *        render(API data)
 *        < HTML (new API data) >
 * Componen tDid Update
 *
 *
 */
