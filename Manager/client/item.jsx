Item = React.createClass({
  render() {
    return (
      <div>
        <a href={this.props.href}>{this.props.title}</a>
      </div>
    )
  }

});
