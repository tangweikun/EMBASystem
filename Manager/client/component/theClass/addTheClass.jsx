AddTheClass = React.createClass({

  onSubmit(e) {
    e.preventDefault()
    let classId = document.getElementById('classId').value.trim()
    let className = document.getElementById('className').value.trim()
    let diretor = document.getElementById('diretor').value.trim()
    let date = document.getElementById('date').value.trim()
    let annual = document.getElementById('annual').value.trim()
    Meteor.call('addTheClass', classId, className, diretor, date, annual)
    document.getElementById('classId').value = ''
    document.getElementById('className').value = ''
    document.getElementById('diretor').value = ''
    document.getElementById('date').value = ''
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
    }

    return (
      <form className="" ref="form" onSubmit={this.onSubmit}>
        <div style={styles.titleStyle}>
          <label>录入班级信息</label>
        </div>
        <div style={styles.div1}>
          <div>
            <label style={styles.label}>班级编号</label>
            <TextField
              id="classId"
              hintText="请输入班级编号"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>班级名称</label>
            <TextField
              id="className"
              hintText="请输入班级名称"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>班主管</label>
            <TextField
              id="diretor"
              hintText="请输入班主管"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>建班时间</label>
            <TextField
              id="date"
              hintText="请选择建班时间"
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
