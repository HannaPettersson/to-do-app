var Form = React.createClass({

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref="text" />
        <button>Add item</button>
      </form>
    );
  },

  handleSubmit: function(event) {
    event.preventDefault(); //Hindrar sidan från att reloadas.
    var textNode = ReactDOM.findDOMNode(this.refs.text);
    console.log("In HandleSubmit:")
    console.log(textNode.value);
    this.props.onItemAdded({ text: textNode.value });
    textNode.value = "";
  },

});
