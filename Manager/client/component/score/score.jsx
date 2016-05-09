TScore = React.createClass({
  getInitialState() {
    return {
      courseName: '',
    }
  },
  handleClick() {
    let courseName = document.getElementById('courseName').value.trim()
    this.setState({courseName: courseName})
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
        // paddingLeft: '50px',
        marginBottom: '20px',
        // marginTop: '15px',
      },
      button: {
        width: '350px',
        marginLeft: '50px',
      },
      text: {
        width: '170px',
        marginRight: '20px',
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
      <div style={{paddingLeft: '15px'}}>
        <div style={styles.titleStyle}>
          <label>录入成绩</label>
        </div>
        <div style={styles.div1}>
          <TextField
            id="courseName"
            hintText="请在此输入课程名称"
            style={styles.text}
            />
          <RaisedButton label='录入成绩' secondary={true} onMouseDown={this.handleClick}/>
        </div>
        <div>
          <AddScore courseName={this.state.courseName} />
        </div>
      </div>
    )
  }
})
