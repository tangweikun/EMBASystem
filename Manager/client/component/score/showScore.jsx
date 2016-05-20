ShowScore = React.createClass({

  getInitialState() {
    return {
      courseName: '',
    }
  },

  handleClick() {
    let courseName = document.getElementById('courseName').value.trim()
    this.setState({courseName: courseName})
  },

  renderScore() {
    return this.state.courseName ? <ScoreItem2 courseName={this.state.courseName}/> : null
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
        // marginBottom: '20px',
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
        float: 'left',
        // marginTop: '20px',
      },
      bar: {
        width: '520px',
      },
    }
    return (
      <div>
        <div style={styles.div1}>
          <div style={styles.titleStyle}>
            <AppBar
              title='查询成绩'
              showMenuIconButton={false}
              style={styles.bar}
              />
          </div>
          <div style={{float: 'right', marginTop: '15px'}}>
            <TextField
              id="courseName"
              hintText="请在此输入课程名称"
              style={styles.text}
              />
            <RaisedButton label='确定' secondary={true} onMouseDown={this.handleClick}/>
          </div>
        </div>
        <div>
          {this.renderScore()}
        </div>
      </div>
    )
  }
})
