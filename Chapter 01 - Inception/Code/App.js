// File to write React Code

// What is the most operation in browser -> DOM tree changes

// Creating element using React
// const heading = React.createElement("h1", {}, "Hello World from React!");

// What is the empty object argument {} in createElement?
// -> This is used to add attributes to the tag
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React!"
);

// What is React.createElement? What is heading?
// heading is an object (React element)

console.log(heading);

// Each Element has props
// props:
//     children: "Hello World from React!"
//     id: "heading"
//     xyz: "abc"

// Creating root using ReactDOM. All elements are rendered in root
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// render function is responsible for taking the element and making it a HTML tag which the browser can understand
// and put it in the root

// How to create nested and sibling elements in React
/*
* <div id="Parent">
    <div id="Child1">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
    <div id="Child2">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
* </div>
*/

const parent = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "Child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "Child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ]),
]);

// To avoid writing such messy code, we will be using JSX
// This is the last time we will be using React.createElement

console.log(parent);

root.render(parent);
