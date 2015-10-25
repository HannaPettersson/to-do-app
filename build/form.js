"use strict";

var Form = React.createClass({
  displayName: "Form",

  render: function render() {
    return React.createElement(
      "form",
      null,
      React.createElement("input", null),
      React.createElement(
        "button",
        null,
        "Add item"
      )
    );
  }
});