//alert("Hello world");

var TodoApp = React.createClass({
  render: function() {

    return (
      <div>
        <ul>
          <li>Wihow this will be a todo app</li>
        </ul>
      </div>

    );
  }

});

ReactDOM.render(<TodoApp />, document.getElementById('app'));
