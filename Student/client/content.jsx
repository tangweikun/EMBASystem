Content = React.createClass({
  render() {
    let content = {
      // marginLeft: '200px',
      background: 'blue'
    }
    return (
      <div style={content} className="col-md-9">{this.props.contents}</div>
    )
  }
})
