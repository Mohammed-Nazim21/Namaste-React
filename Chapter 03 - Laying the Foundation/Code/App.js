// File to write React Code
import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// Similar to DOM elements but React elements are objects which when rendered become HTML element

// Creating React element using React
// React.createElememt => ReactElement-JS Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

console.log(heading);

// JSX -> is not HTML in JS
// JSX is HTML or XML like syntax
// How to create h1 tag (React element) using JSX
const jsxHeading = <h1 id="heading">React using JSX</h1>;

// Rendering a React Element
console.log(jsxHeading);

//JSX is transpiled by parcel before it reaches JS Engine
// Parcel uses Babel to transpile JSX
// JSX => Babel transpiles it to React.createElememt => ReactElement-JS Object => HTMLElement(render)

// React Functional Component
// const HeadingComponent1 = () => {
//   return <h1>React Functional Component</h1>;
// };
// OR it can also be written without 'return' keyword since it is an arrow function
// const HeadingComponent2 = () => <h1>React Functional Component</h1>;

// Nested Functional Component
// const HeadingComponent1 = () => {
//   return (
//     <div id="container">
//       <h1>React Functional Component</h1>
//     </div>
//   );
// };

/* ********************************************************************************* */

// How to render a component inside another component
// This is also called component composition
const Title = () => {
  return <h1>Nested Component</h1>;
};
// We can also write functional component without using arrow function
// const Title = function () {
//   return <h1>Nested Component</h1>;
// };
// Writing functional component using arrow function is industry standard

// const number = 3000;

// const HeadingComponent1 = () => {
//   return (
//     <div id="container">
//       <Title />
//       {/* Special feature in JSX -> In JSX, by using curly braces '{}', we can write
//       any javascript expression (but not statements) inside the curly braces */}
//       {/* <h1>{number}</h1> */}
//       <h1>{100 + 250}</h1>
//       <h1>React Functional Component</h1>
//     </div>
//   );
// };

/* ********************************************************************************* */
// How to put React element inside a React component?
// How to put React element inside another React element?

const nestedEle = <span>Nested React Element </span>;

const element = (
  <h1>
    {nestedEle}
    React Element
  </h1>
);

const HeadingComponent1 = () => {
  return (
    <div id="container">
      {/* Different ways of nested the component */}
      <Title />
      <Title></Title>
      {Title()}
      {element}
      <h1>React Functional Component</h1>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering a React function component
root.render(<HeadingComponent1 />);
