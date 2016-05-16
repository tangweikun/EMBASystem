Login = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    const sub = Meteor.subscribe('users')
    return {
      ready: sub.ready(),
    }
  },

  getInitialState() {
    return {
      open: false,
    }
  },

  handleOpen() {
    this.setState({
      open: true,
    })
  },

  handleClose() {
    this.setState({
      open: false,
    })
  },

  onSubmit(event) {
    event.preventDefault()
    let success
    let username = document.getElementById('username').value.trim()
    let password = document.getElementById('password').value.trim()
    let user = Meteor.users.findOne({username: username})
    if (!user) {
      this.handleOpen()
      document.getElementById('username').value = ''
      document.getElementById('password').value = ''
      return
    }
    let that = this
    let profile = user.profile
    if (profile.roles != 'student' || profile.state != '在校') {
      this.handleOpen()
      document.getElementById('username').value = ''
      document.getElementById('password').value = ''
      return
    }
    Meteor.loginWithPassword( username, password,
    function (err) {
      console.log(err, arguments)
      if (!err) {
        FlowRouter.go('/')
        success = true
        return
      } else {
        that.handleOpen()
        document.getElementById('password').value = ''
      }
    })
  },
  render() {
    if (!this.data.ready) return null
    const { RaisedButton, TextField, AppBar, Dialog, FlatButton } = MUI
    const actions = [
      <FlatButton
        label="确定"
        secondary={true}
        onTouchTap={this.handleClose}
        onMouseDown={this.handleClose}
        keyboardFocused={true}
      />,
    ]
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
      },
      label: {
        marginRight: screenWidth * 0.025,
        fontSize: '18px'
      },
      bar: {
        marginBottom: screenWidth * 0.156,
      },
      contentStyle: {
        width: screenWidth * 0.667,  //'250px',
        left: screenWidth * 0.813,   //'-305px',
        top: screenWidth * 0.053,  //'-20px',
      },
      bodyStyle: {
        fontSize: '16px',
      },
      overlayStyle: {
        width: '0px',
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
          onMouseEnter={this.onSubmit}
          onTouchEnd={this.onSubmit}
        />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          contentStyle={styles.contentStyle}
          onRequestClose={this.handleClose}
          overlayStyle={styles.overlayStyle}
          bodyStyle={styles.bodyStyle}
        >
        用户名不存在或者密码错误
        </Dialog>
      </div>
      </form>
    )
  }
})
