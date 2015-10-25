//alert("Hello world");

var TodoApp = React.createClass({

  componentWillUpdate: function(nextProps, nextState) {
    localStorage.items = JSON.stringify(nextState.items);
  },

  getItemsFromLocalStore: function() {
    if (localStorage.items){
        return JSON.parse(localStorage.items);
    } else {
      return[];
    }
  },

  getInitialState: function() {
    return {
      items: this.getItemsFromLocalStore()
    };
  },

  buildItemNode: function(item,index) {
    //console.log(item,index);
    return (
      <Item
        key = {index}
        text={item.text}
        complete={item.complete}
        onUpdate={this.updateItem.bind(this, index)}/>
    );
  },

  handleNewItem: function(item) {
    console.log(item);
    var newItems = this.state.items.concat([item]);
    this.setState({items: newItems});

  },

  updateItem: function(index, action) {
    var items = this.state.items;
    if (action.remove) {
      items.splice(index, 1);
    } else {
      console.log(items,index);
      items[index].complete = action.complete;
    }

    console.log(items[index]);
    this.setState({ items: items});
  },



  render: function() {
    return (
      <div>
        <Form onItemAdded={this.handleNewItem} />
        <ul>
          {this.state.items.map(this.buildItemNode)}
        </ul>
      </div>
    );
  }

});


ReactDOM.render(<TodoApp />, document.getElementById('app'));
