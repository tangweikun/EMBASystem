AddTeacher = React.createClass({

  onSubmit(e) {
    e.preventDefault()
    let teacherId = document.getElementById('teacherId').value.trim()
    let teacherName = document.getElementById('teacherName').value.trim()
    let gender = document.getElementById('gender').value.trim()
    let title = document.getElementById('title').value.trim()
    let degree = document.getElementById('degree').value.trim()
    let organization = document.getElementById('organization').value.trim()
    let course = document.getElementById('course').value.trim()
    Meteor.call('addTeacher', teacherId, teacherName, gender, title, degree, course, organization)
    document.getElementById('teacherId').value = ''
    document.getElementById('teacherName').value = ''
    document.getElementById('gender').value = ''
    document.getElementById('title').value = ''
    document.getElementById('degree').value = ''
    document.getElementById('organization').value = ''
    document.getElementById('course').value = ''
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
    }

    return (
      <form className="" ref="form" onSubmit={this.onSubmit}>
        <div style={styles.titleStyle}>
          <label>录入授课教师</label>
        </div>
        <div style={styles.div1}>
          <div>
            <label style={styles.label}>编号</label>
            <TextField
              id="teacherId"
              hintText="请输入教师编号"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>姓名</label>
            <TextField
              id="teacherName"
              hintText="请输入教师姓名"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>性别</label>
            <TextField
              id="gender"
              hintText="男/女"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>职称</label>
            <TextField
              id="title"
              hintText="教授/副教授/讲师"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>学位</label>
            <TextField
              id="degree"
              hintText="博士/硕士/学士"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>单位</label>
            <TextField
              id="organization"
              hintText="请输入教师所在单位"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>主讲课程</label>
            <TextField
              id="course"
              hintText="请输入主讲课程"
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
