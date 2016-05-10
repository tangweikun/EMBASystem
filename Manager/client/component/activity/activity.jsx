AddActivity = React.createClass({

  onSubmit(e) {
    e.preventDefault()
    let topic = document.getElementById('topic').value.trim()
    let speaker = document.getElementById('speaker').value.trim()
    let where = document.getElementById('where').value.trim()
    let date = document.getElementById('date').value.trim()
    let time = document.getElementById('time').value.trim()
    Meteor.call('AddActivity', topic, speaker, where, date, time)
    document.getElementById('topic').value = ''
    document.getElementById('speaker').value = ''
    document.getElementById('where').value = ''
    document.getElementById('date').value = ''
    document.getElementById('time').value = ''
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
          <label>添加讲座信息</label>
        </div>
        <div style={styles.div1}>
          <div>
            <label style={styles.label}>讲座人</label>
            <TextField
              id="topic"
              hintText="请输入活动主题"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>主题</label>
            <TextField
              id="speaker"
              hintText="请输入讲座人"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>地点</label>
            <TextField
              id="where"
              hintText="请输入活动地点"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>日期</label>
            <TextField
              id="date"
              hintText="请输入活动日期"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>时间</label>
            <TextField
              id="time"
              hintText="请选择活动时间"
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
