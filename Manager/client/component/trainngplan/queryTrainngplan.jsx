QueryTrainngplan = React.createClass({

  getInitialState() {
    return {
      annual: '',
    }
  },

  handleClick() {
    const annual = document.getElementById('annual').value.trim()
    this.setState({annual: annual})
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
        width: '250px',
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
      <div>
        <div style={styles.titleStyle}>
          <label>历届培养计划</label>
        </div>
        <div style={styles.div1}>
          <TextField
            id="annual"
            hintText="请在此输入培养计划届数"
            style={styles.text}
            />
          <RaisedButton label='查询' secondary={true} onMouseDown={this.handleClick}/>
        </div>
        <div>
          <ShowTrainingPlan annual={this.state.annual} />
        </div>
      </div>
    )
  }
})
