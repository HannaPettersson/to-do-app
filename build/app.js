//alert("Hello world");

'use strict';

var TodoApp = React.createClass({
  displayName: 'TodoApp',

  render: function render() {

    return React.createElement(
      'div',
      null,
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          null,
          'Wihow this will be a todo app'
        )
      )
    );
  }

});

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('app'));