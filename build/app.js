//alert("Hello world");

'use strict';

var TodoApp = React.createClass({
  displayName: 'TodoApp',

  componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
    localStorage.items = JSON.stringify(nextState.items);
  },

  getItemsFromLocalStore: function getItemsFromLocalStore() {
    if (localStorage.items) {
      return JSON.parse(localStorage.items);
    } else {
      return [];
    }
  },

  getInitialState: function getInitialState() {
    return {
      items: this.getItemsFromLocalStore()
    };
  },

  buildItemNode: function buildItemNode(item, index) {
    //console.log(item,index);
    return React.createElement(Item, {
      key: index,
      text: item.text,
      complete: item.complete,
      onUpdate: this.updateItem.bind(this, index) });
  },

  handleNewItem: function handleNewItem(item) {
    console.log(item);
    var newItems = this.state.items.concat([item]);
    this.setState({ items: newItems });
  },

  updateItem: function updateItem(index, action) {
    var items = this.state.items;
    if (action.remove) {
      items.splice(index, 1);
    } else {
      console.log(items, index);
      items[index].complete = action.complete;
    }

    console.log(items[index]);
    this.setState({ items: items });
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Form, { onItemAdded: this.handleNewItem }),
      React.createElement(
        'ul',
        null,
        this.state.items.map(this.buildItemNode)
      )
    );
  }

});

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('app'));