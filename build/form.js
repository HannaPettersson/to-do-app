"use strict";

var Form = React.createClass({
  displayName: "Form",

  render: function render() {
    return React.createElement(
      "form",
      { onSubmit: this.handleSubmit },
      React.createElement("input", { ref: "text" }),
      React.createElement(
        "button",
        null,
        "Add item"
      )
    );
  },

  handleSubmit: function handleSubmit(event) {
    event.preventDefault(); //Hindrar sidan från att reloadas.
    var textNode = ReactDOM.findDOMNode(this.refs.text);
    console.log("In HandleSubmit:");
    console.log(textNode.value);
    this.props.onItemAdded({ text: textNode.value });
    textNode.value = "";
  }

});