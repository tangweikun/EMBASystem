

AddManager = React.createClass({

  onSubmit(e) {
    e.preventDefault()
    let username = document.getElementById('username').value.trim()
    let password = document.getElementById('password').value.trim()
    Meteor.call('addManager', username, password)
    document.getElementById('username').value = ''
    document.getElementById('password').value = ''
  },

  render() {
    const { RaisedButton, TextField, AppBar } = MUI
    const screenWidth = window.innerWidth
    const styles = {
      form: {
        width: screenWidth,
      },
      div1: {
        // width: screenWidth,
        paddingLeft: '50px',
        marginBottom: '20px',
        marginTop: '15px',
      },
      button: {
        width: '350px',
        marginLeft: '50px',
      },
      text: {

      },
      label: {
        marginRight: '15px',
        width: '72px',
        fontSize: '18px',
        textAlign: 'right',
      },
      titleStyle: {
        fontSize: '22px',
        marginTop: '20px',
      },
      paddingLeft: {
        paddingLeft: '15px',
      },
    }

    return (
      <form style={styles.paddingLeft} ref="form" onSubmit={this.onSubmit}>
        <div style={styles.titleStyle}>
          <label>添加管理员</label>
        </div>
        <div style={styles.div1}>
          <div>
            <label style={styles.label}>用户名</label>
            <TextField
              id="username"
              hintText="请输入用户名"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>密码</label>
            <TextField
              id="password"
              hintText="请输入密码"
              type="password"
              style={styles.text}
              />
          </div>
        </div>
        <div>
          <RaisedButton
            label="提交"
            secondary={true}
            style={styles.button}
            onMouseDown={this.onSubmit}
          />
        </div>
      </form>
    )
  }
})
