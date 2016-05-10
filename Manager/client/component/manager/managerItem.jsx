ManagerItem = React.createClass({
  render() {
    return (
      <div className="col-md-9">
          <div className="col-md-2">{this.props.manager.username}</div>
          <div className="col-md-2">{this.props.manager.profile.roles}</div>
      </div>
    )
  }
})
