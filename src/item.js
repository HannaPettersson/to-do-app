
var Item = React.createClass({

  toggleComplete: function() {
    if (this.props.complete) {
      this.props.onUpdate({ complete: false });
      } else {
      this.props.onUpdate({ complete: true });
    }

    console.log(this.props.complete);
},

remove: function(event) {

  event.preventDefault();
  event.stopPropagation();
  this.props.onUpdate({ remove:true});
  console.log("hej");
},

render: function() {
  var complete = this.props.complete ? "complete" : "not-complete";

  return (
    <li onClick={this.toggleComplete} className={complete}>
      <span className="text">{this.props.text}</span>
      <a className="remove" onClick={this.remove}>x</a>
      </li>
);
}

});
