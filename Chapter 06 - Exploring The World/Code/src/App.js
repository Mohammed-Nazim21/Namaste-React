// File to write React Code
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  // console.log(<Body />);
  return (
    <div className="app">
      <Header />
      <Body />
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering a React function component
root.render(<AppLayout />);
