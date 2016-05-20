QueryTrainngplan = React.createClass({

  getInitialState() {
    //按9月为划分
    const month = Number(moment().format('MM'))  //获取当前月份
    const diff = month > 8 ? 0 : 1
    const year = Number(moment().format('YYYY')) - diff //获取当前年份
    return {
      annual: year,
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
        // marginBottom: '15px',
        // marginTop: '15px',
        // paddingLeft: '15px',
        // display:
        // float: 'right',
        // marginTop: '15px',
      },
      button: {
        width: '350px',
        marginLeft: '50px',
      },
      text: {
        width: '160px',
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
        // marginTop: '15px',
        float: 'left',
        // display: 'inline-block',
      },
      paddingLeft: {
        paddingLeft: '15px',
      },
      bar: {
        width: '360px',
      },
    }

    return (
      <div>
        <div style={styles.div1}>
          { this.state.annual ?
              <div style={styles.titleStyle}>
                  <AppBar
                    title={`${this.state.annual}届培养计划`}
                    showMenuIconButton={false}
                    style={styles.bar}
                    />
              </div> : null
          }
          <div style={{float: 'right', marginTop: '15px'}}>
            <TextField
              id="annual"
              hintText="输入届数,如‘2013’"
              style={styles.text}
              />
            <RaisedButton label='查询' secondary={true} onMouseDown={this.handleClick}/>
          </div>

        </div>
        <div style={{float: 'left',clear: 'both'}}>
          <ShowTrainingPlan annual={this.state.annual} />
        </div>
      </div>
    )
  }
})
