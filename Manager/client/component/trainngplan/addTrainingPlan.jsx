AddTrainingPlan = React.createClass({

  onSubmit(e) {
    e.preventDefault()
    let courseId = document.getElementById('courseId').value.trim()
    let courseName = document.getElementById('courseName').value.trim()
    let evaluationMode = document.getElementById('evaluationMode').value.trim()
    let category = document.getElementById('category').value.trim()
    let credit = document.getElementById('credit').value.trim()
    let period = document.getElementById('period').value.trim()
    let annual = document.getElementById('annual').value.trim()
    Meteor.call('addTrainingPlan', courseId, courseName, category, credit, period, evaluationMode, annual)
    document.getElementById('courseId').value = ''
    document.getElementById('courseName').value = ''
    document.getElementById('evaluationMode').value = ''
    document.getElementById('category').value = ''
    document.getElementById('credit').value = ''
    document.getElementById('period').value = ''
    document.getElementById('annual').value = ''
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
          <label>添加培养计划</label>
        </div>
        <div style={styles.div1}>
          <div>
            <label style={styles.label}>课程编号</label>
            <TextField
              id="courseId"
              hintText="请输入课程编号"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>课程名称</label>
            <TextField
              id="courseName"
              hintText="请输入课程名称"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>考核方式</label>
            <TextField
              id="evaluationMode"
              hintText="考核/考察"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>类别</label>
            <TextField
              id="category"
              hintText="基础课/专业核心课/必修环节"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>学分</label>
            <TextField
              id="credit"
              hintText="请输入学分"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>学时</label>
            <TextField
              id="period"
              hintText="请输入学时"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>年份</label>
            <TextField
              id="annual"
              hintText="请输入年份"
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
