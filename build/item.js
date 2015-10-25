"use strict";

var Item = React.createClass({
  displayName: "Item",

  render: function render() {
    return React.createElement(
      "li",
      null,
      React.createElement(
        "span",
        { className: "text" },
        this.props.text
      )
    );
  }

});