AddStudent = React.createClass({

  onSubmit(e) {
    e.preventDefault()
    let studentId = document.getElementById('studentId').value.trim()
    let studentName = document.getElementById('studentName').value.trim()
    let gender = document.getElementById('gender').value.trim()
    let IDNumber = document.getElementById('IDNumber').value.trim()
    let nation = document.getElementById('nation').value.trim()
    let politicalLandscape = document.getElementById('politicalLandscape').value.trim()
    let company = document.getElementById('company').value.trim()
    let position = document.getElementById('position').value.trim()
    let postalAdress = document.getElementById('postalAdress').value.trim()
    let postcode = document.getElementById('postcode').value.trim()
    let admissionDate = document.getElementById('admissionDate').value.trim()
    let theClass = document.getElementById('theClass').value.trim()
    let category = document.getElementById('category').value.trim()
    let area = document.getElementById('area').value.trim()
    let annual = document.getElementById('annual').value.trim()
    Meteor.call('addStudent', studentId, studentName, gender, IDNumber, nation, politicalLandscape, company, position, postalAdress, postcode, admissionDate, theClass, category, area, annual)
    Meteor.call('addScore', studentId, theClass, studentName, annual)
    document.getElementById('studentId').value = ''
    document.getElementById('studentName').value = ''
    document.getElementById('gender').value = ''
    document.getElementById('IDNumber').value = ''
    document.getElementById('nation').value = ''
    document.getElementById('politicalLandscape').value = ''
    document.getElementById('company').value = ''
    document.getElementById('position').value = ''
    document.getElementById('postalAdress').value = ''
    document.getElementById('postcode').value = ''
    document.getElementById('admissionDate').value = ''
    document.getElementById('theClass').value = ''
    document.getElementById('category').value = ''
    document.getElementById('area').value = ''
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
          <label>录入学员信息</label>
        </div>
        <div style={styles.div1}>
          <div>
            <label style={styles.label}>学号</label>
            <TextField
              id="studentId"
              hintText="请输入学员编号"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>姓名</label>
            <TextField
              id="studentName"
              hintText="请输入学员姓名"
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
            <label style={styles.label}>身份证号</label>
            <TextField
              id="IDNumber"
              hintText="请输入身份证号"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>民族</label>
            <TextField
              id="nation"
              hintText="请输入民族"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>政治面貌</label>
            <TextField
              id="politicalLandscape"
              hintText="请输入政治面貌"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>公司</label>
            <TextField
              id="company"
              hintText="请输入公司名称"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>职务</label>
            <TextField
              id="position"
              hintText="请输入职务"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>邮寄地址</label>
            <TextField
              id="postalAdress"
              hintText="请输入邮寄地址"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>邮政编码</label>
            <TextField
              id="postcode"
              hintText="请输入邮政编码"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>录取日期</label>
            <TextField
              id="admissionDate"
              hintText="请选择录取日期"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>班级</label>
            <TextField
              id="theClass"
              hintText="请输入班级名称"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>类别</label>
            <TextField
              id="category"
              hintText="正式/跟读"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>区域</label>
            <TextField
              id="area"
              hintText="请输入所在区域"
              style={styles.text}
              />
          </div>
          <div>
            <label style={styles.label}>届数</label>
            <TextField
              id="annual"
              hintText="请输入届数"
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
