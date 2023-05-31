import React from "react";
import { createRoot } from "react-dom/client";

import { IndexMenu } from "./components-1/IndexMenu";

import Router from "./util/router/router";

const root = document.querySelector("#root");

function init() {
  if (root) {
    return root.insertAdjacentHTML("beforebegin", IndexMenu);
  }
}

init();

const router = new Router();

router
  .addRoute("/", () => {
    // Handle the home route
    console.log("Home page");
  })
  .addRoute("/notes", () => {
    // Handle the about route
    console.log("Notes");
  })
  .start();

if (root) {
  const MyComponent = () => {
    return React.createElement("h1", null, Home(), "Hello, React!");
  };

  const Home = () => {
    const [text, setText] = React.useState("hi!");

    const handleClick = () => {
      text === "hi!" ? setText("bye") : setText("hi!");
    };

    return React.createElement("button", { onClick: handleClick }, text);
  };

  createRoot(root).render(React.createElement(MyComponent));
}
