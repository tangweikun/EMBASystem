AddManager = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    let username = ReactDOM.findDOMNode(this.refs.username).value.trim(), password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    Meteor.call('addManager', username, password);
    ReactDOM.findDOMNode(this.refs.username).value = ''; ReactDOM.findDOMNode(this.refs.password).value = '';
  },
  render() {
    return (
      <form className="" ref="form" onSubmit={this.onSubmit}>
        <div className="container">
        <div className="row">
        <div className="col-md-4">
          <label>用户名</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="username" />
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>密码</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="password" />
        </div>
        </div>
        <div calssName="row">
          <button type="submit">提交</button>
        </div>
        </div>
      </form>
    )
  }
})
