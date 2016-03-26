Layout = React.createClass({
  render() {
    let layout = {
      position: 'relative',
      left: '0px'
    }
    return (
      <div style={layout} className="container">
        <Header />
        <div className="row">
        <Nav />
        {this.props.content}
      </div>
      </div>
    )
  }
})
