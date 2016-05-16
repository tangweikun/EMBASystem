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
    if (profile.roles != 'manager') return
    Meteor.loginWithPassword( username, password,
    function (err) {
      console.log(err, arguments)
      if (!err) {
        FlowRouter.go('/')
        success = true
        return
      } else {
        that.handleOpen()
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
        marginLeft: (screenWidth - 600) / 2 + 'px',
        marginTop: '100px',
        textAlign: 'center',
        width: '600px',
        height: '600px'
      },
      div1: {
        width: '400px',
        // textAlign: 'center',
        marginLeft: '110px',  //25px
        marginBottom: '32px',  //32px
      },
      button: {
        width: '400px',
        marginLeft: '25px',  //25px
      },
      text: {
        width: '300px',
      },
      label: {
        marginRight: '5px',
        fontSize: '18px'
      },
      bar: {
        marginBottom: '30px',
      },
      contentStyle: {
        width: '260px',  //'250px',
        left: '15px',   //'-305px',
        top: '-180px',  //'-20px',
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
