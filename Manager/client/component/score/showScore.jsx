ShowScore = React.createClass({

  getInitialState() {
    return {
      content: false
    }
  },


  _txtBlur(e) {
    // this.state.content = e.target.value
    this.setState({
      content: e.target.value
    })
    console.log("000",e.target.value,this.state.content);

  },

  renderScore() {
    console.log("message",this.state.content);
    return this.state.content ? <ScoreItem2 courseName={this.state.content}/> : null
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
          <label>查询成绩</label>
        </div>
        <div style={styles.div1}>
          <TextField
            id="courseName"
            hintText="请在此输入课程名称"
            style={styles.text}
            onBlur={this._txtBlur}
            />
        <div>
          {this.renderScore()}
        </div>
      </div>
    </div>
    )
  }
})
