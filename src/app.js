//alert("Hello world");

var TodoApp = React.createClass({

  getInitialState: function() {
    return {
      items: [
        {text: "This is a todo item", complete:false },
        {text: "One more item", complete:false }
      ]
    };
  },

  buildItemNode: function(item,index) {
    console.log(item,index);
    return (
      <Item
        key = {index}
        text={item.text}
        complete={item.complete} />
    );
  },

  render: function() {
    return (
      <div>
        <Form/>
        <ul>
          {this.state.items.map(this.buildItemNode)}
        </ul>
      </div>
    );
  }


});


ReactDOM.render(<TodoApp />, document.getElementById('app'));
