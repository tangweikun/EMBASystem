AddTrainingPlan = React.createClass({

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

  onSubmit(e) {
    e.preventDefault()
    let category
    let evaluationMode
    let courseId = document.getElementById('courseId').value.trim()
    let courseName = document.getElementById('courseName').value.trim()
    // let evaluationMode = document.getElementById('evaluationMode').value.trim()
    // let category = document.getElementById('category').value.trim()
    let credit = document.getElementById('credit').value.trim()
    let period = document.getElementById('period').value.trim()
    let annual = document.getElementById('annual').value.trim()
    let getCategory = document.getElementsByName('category')
    for (let i = 0; i < getCategory.length; i++) {
      if (getCategory[i].checked) {
        category = getCategory[i].value
      }
    }
    let getEvaluationMode = document.getElementsByName('evaluationMode')
    for (let i = 0; i < getEvaluationMode.length; i++) {
      if (getEvaluationMode[i].checked) {
        evaluationMode = getEvaluationMode[i].value
      }
    }
    if (!courseId || !courseName || !credit || !category || !period || !evaluationMode || !annual) {
      this.handleOpen()
      return
    }
    Meteor.call('addTrainingPlan', courseId, courseName, category, credit, period, evaluationMode, annual)
    document.getElementById('courseId').value = ''
    document.getElementById('courseName').value = ''
    document.getElementById('credit').value = ''
    document.getElementById('period').value = ''
    document.getElementById('annual').value = ''
  },

  render() {
    const { RaisedButton, TextField, AppBar, RadioButtonGroup, RadioButton, MenuItem, SelectField, FlatButton, Dialog } = MUI
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
      radioButton: {
        minWidth: '120px',
        width: '',
      },
      contentStyle: {
        width: '350px',  //'250px',
        left: '55px',   //'-305px',
        top: '-60px',  //'-20px',
      },
      bodyStyle: {
        fontSize: '16px',
      },
      overlayStyle: {
        width: '0px',
      },
      bar: {
        width: '620px',
      },
    }
    const items = [
  <MenuItem key={1} value={1} primaryText="Never" />,
  <MenuItem key={2} value={2} primaryText="Every Night" />,
  <MenuItem key={3} value={3} primaryText="Weeknights" />,
  <MenuItem key={4} value={4} primaryText="Weekends" />,
  <MenuItem key={5} value={5} primaryText="Weekly" />,
];

    return (
      <form ref="form" onSubmit={this.onSubmit}>
        <div style={styles.titleStyle}>
          <AppBar
            title='添加培养计划'
            showMenuIconButton={false}
            style={styles.bar}
            />
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
          <div style={{display: 'flex'}}>
            <label style={styles.label}>考核方式</label>
            <RadioButtonGroup name="evaluationMode" style={{display: 'flex'}}>
              <RadioButton
                value="考试"
                label="考试"
                style={{width: '110px'}}
              />
              <RadioButton
                value="考查"
                label="考查"
                style={{width: '110px'}}
              />
          </RadioButtonGroup>
          </div>
          <div style={{display: 'flex'}}>
            <label style={styles.label}>类别</label>
            <RadioButtonGroup name="category" style={{display: 'flex'}}>
              <RadioButton
                value="基础课"
                label="基础课"
                style={{width: '110px'}}
              />
              <RadioButton
                value="专业核心课"
                label="专业核心课"
                style={{width: '130px'}}
              />
            <RadioButton
              value="必修环节"
              label="必修环节"
              style={{width: '120px'}}
            />
            <RadioButton
              value="专业选修课"
              label="专业选修课"
              style={{width: '130px'}}
            />
          </RadioButtonGroup>
          </div>
        </div>
        <div>
          <RaisedButton
            label="提交"
            secondary={true}
            style={styles.button}
            onMouseDown={this.onSubmit}
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
          请检查所填内容，信息内容不得为空
          </Dialog>
        </div>
      </form>
    )
  }
})
