AddSchedule = React.createClass({

  onSubmit(e) {
    e.preventDefault()
    let scheduleId = document.getElementById('scheduleId').value.trim()
    let when = document.getElementById('when').value.trim()
    let courseName = document.getElementById('courseName').value.trim()
    let teacherName = document.getElementById('teacherName').value.trim()
    let teacherOrganization = document.getElementById('teacherOrganization').value.trim()
    let className = document.getElementById('className').value.trim()
    let where = document.getElementById('where').value.trim()
    let semester = document.getElementById('semester').value.trim()
    let courseId = document.getElementById('courseId').value.trim()
    Meteor.call('addSchedule', scheduleId, when, courseName, teacherName, teacherOrganization, className, where, semester, courseId);
//改变score中的state和status
    Meteor.call('changeState',courseName, className, courseId)
    Meteor.call('changeState2',courseName, className, courseId)
    document.getElementById('scheduleId').value = ''
    document.getElementById('when').value = ''
    document.getElementById('courseName').value = ''
    document.getElementById('teacherName').value = ''
    document.getElementById('teacherOrganization').value = ''
    document.getElementById('className').value = ''
    document.getElementById('where').value = ''
    document.getElementById('semester').value = ''
    document.getElementById('courseId').value = ''
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
        // marginTop: '20px',
      },
      bar: {
        width: '560px',
      },
    }

    return (
      <form style={styles.paddingLeft} ref="form" onSubmit={this.onSubmit}>
        <div style={styles.titleStyle}>
          <AppBar
            title='录入课程表'
            showMenuIconButton={false}
            style={styles.bar}
            />
        </div>
        <div style={styles.div1}>
          <div>
            <label style={styles.label}>序号</label>
            <TextField
              id="scheduleId"
              hintText="请输入课程序号"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>时间</label>
            <TextField
              id="when"
              hintText="请输入上课时间"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>课程</label>
            <TextField
              id="courseName"
              hintText="请输入课程名称"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>课程编号</label>
            <TextField
              id="courseId"
              hintText="请输入课程编号"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>主讲教师</label>
            <TextField
              id="teacherName"
              hintText="请输入主讲教师"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>教师单位</label>
            <TextField
              id="teacherOrganization"
              hintText="请输入教师所在单位"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>上课班级</label>
            <TextField
              id="className"
              hintText="请输入上课班级"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>上课地点</label>
            <TextField
              id="where"
              hintText="请输入上课地点"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>学期</label>
            <TextField
              id="semester"
              hintText="请输入学期"
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
