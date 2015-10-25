"use strict";

var Item = React.createClass({
  displayName: "Item",

  toggleComplete: function toggleComplete() {
    if (this.props.complete) {
      this.props.onUpdate({ complete: false });
    } else {
      this.props.onUpdate({ complete: true });
    }

    console.log(this.props.complete);
  },

  remove: function remove(event) {

    event.preventDefault();
    event.stopPropagation();
    this.props.onUpdate({ remove: true });
    console.log("hej");
  },

  render: function render() {
    var complete = this.props.complete ? "complete" : "not-complete";

    return React.createElement(
      "li",
      { onClick: this.toggleComplete, className: complete },
      React.createElement(
        "span",
        { className: "text" },
        this.props.text
      ),
      React.createElement(
        "a",
        { className: "remove", onClick: this.remove },
        "x"
      )
    );
  }

});