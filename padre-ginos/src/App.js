import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pepperoni Pizza",
      description: "Mozzarella Cheese, Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "Sausage",
      description: "Mozzarella Cheese, Sausage",
    }),
    React.createElement(Pizza, {
      name: "Cheese",
      description: "Mozzarella Cheese",
    }),
    React.createElement(Pizza, {
      name: "Personal Pan",
      description: "Mozzarella Cheese, 6 inch",
    }),
    React.createElement(Pizza, {
      name: "Tavern Mushroon",
      description: "Mozzarella Cheese, Mushrooms",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
