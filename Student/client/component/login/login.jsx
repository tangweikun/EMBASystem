Login = React.createClass({
  // getInitialState() {
  //
  // },
  onSubmit(event) {
    event.preventDefault()
    let username = this.refs.username.value.trim()
    let password = this.refs.password.value.trim()
    Meteor.loginWithPassword( username, password,
    function(err) {
      if (!err) {
        FlowRouter.go('/')
        return
      } else {
        console.log("wrong password");
      }
    })

    // Meteor.call('login', username, password)
  },
  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit}>
        <input type="text" placeholder="输入用户名" ref="username"/>
        <input type="password" placeholder="输入密码" ref="password"/>
        <button type="submit"></button>
      </form>
    )
  }
})
