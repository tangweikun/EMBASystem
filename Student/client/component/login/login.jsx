Login = React.createClass({
  onSubmit(event) {
    event.preventDefault()
    let username = document.getElementById('username').value.trim()
    let password = document.getElementById('password').value.trim()
    Meteor.loginWithPassword( username, password,
    function (err) {
      if (!err) {
        FlowRouter.go('/')
        return
      } else {
        console.log("wrong password");
      }
    })
  },
  render() {
    const { RaisedButton, TextField, AppBar } = MUI
    const screenWidth = window.innerWidth
    const styles = {
      form: {
        width: screenWidth,
      },
      div1: {
        width: screenWidth,
        paddingLeft: screenWidth * 0.078,  //25px
        marginBottom: screenWidth * 0.094,  //32px
      },
      button: {
        width: screenWidth * 0.84,
        marginLeft: screenWidth * 0.078,  //25px
      },
      text: {
        width: screenWidth * 0.7,
        // marginBottom: screenWidth * 0.046,
      },
      label: {
        marginRight: screenWidth * 0.025,
        fontSize: '18px'
      },
      bar: {
        marginBottom: screenWidth * 0.156,
      },
    }
    return (
      <form ref="form" onSubmit={this.onSubmit} style={styles.form}>
        <AppBar
          title="登录"
          showMenuIconButton={false}
          style={styles.bar}
          />
        <div style={styles.div1}>
          <div>
            <label style={styles.label}>账号</label>
            <TextField
              id="username"
              hintText="请输入学号"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>密码</label>
            <TextField
            type="password"
            id="password"
            hintText="请输入密码"
            style={styles.text}
          />
          </div>


        </div>
      <div>
        <RaisedButton
          label="登录"
          secondary={true}
          style={styles.button}
          onMouseEnter={this.onSubmit}   //onMouseEnter需去掉
          onTouchEnd={this.onSubmit}
        />
      </div>
      </form>
    )
  }
})
