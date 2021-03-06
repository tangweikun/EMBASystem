ChangePassword = React.createClass({
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
      content: '密码不得少于6位，请重新输入！',
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
    let oldPassword = document.getElementById('oldPassword').value.trim()
    let newPassword = document.getElementById('newPassword').value.trim()
    let that = this
    if (!newPassword || !oldPassword || newPassword.length < 6) {
      that.state.content = '密码不得少于6位，请重新输入！'
      document.getElementById('newPassword').value = ''
      that.handleOpen()
      return
    }
    Accounts.changePassword(oldPassword, newPassword, function(error){
      if (error) {
        that.state.content = '旧密码错误，请重新输入！'
        that.handleOpen()
      } else {
        that.state.content = '密码修改成功，请记住新密码！'
        that.handleOpen()
      }
    })
    document.getElementById('oldPassword').value = ''
    document.getElementById('newPassword').value = ''

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
        // marginLeft: (screenWidth - 600) / 2 + 'px',
        // marginTop: '100px',
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
        width: '380px',  //'250px',
        left: '72px',   //'-305px',
        top: '-105px',  //'-20px',
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
          title="修改密码"
          showMenuIconButton={false}
          style={styles.bar}
          />
        <div style={styles.div1}>
          <div>
            <label style={styles.label}>旧密码</label>
            <TextField
              id="oldPassword"
              hintText="请输入旧密码"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>新密码</label>
            <TextField
            type="newPassword"
            id="newPassword"
            hintText="请输入新密码"
            style={styles.text}
          />
          </div>
        </div>
      <div>
        <RaisedButton
          label="确认修改"
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
        {this.state.content}
        </Dialog>
      </div>
      </form>
    )
  }
})
