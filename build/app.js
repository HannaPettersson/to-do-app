//alert("Hello world");

"use strict";

var TodoApp = React.createClass({
  displayName: "TodoApp",

  getInitialState: function getInitialState() {
    return {
      items: [{ text: "This is a todo item", complete: false }, { text: "One more item", complete: false }]
    };
  },

  buildItemNode: function buildItemNode(item, index) {
    console.log(item, index);
    return React.createElement(Item, {
      key: index,
      text: item.text,
      complete: item.complete });
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Form, null),
      React.createElement(
        "ul",
        null,
        this.state.items.map(this.buildItemNode)
      )
    );
  }

});

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('app'));