ScoreItem = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('score')
    let score = Score.findOne({studentId: this.props.studentId})
    // console.log("message--",score);

    return {
      score: sub.ready() ? score : null,
      ready: sub.ready(),
    }
  },

  _txtBlur(e) {
    let score = e.target.value
    console.log(score);

    Meteor.call('addScore2',this.props.studentId,this.props.courseName,this.props.courseId,score)
  },
  render() {
    if (!this.data.ready || !this.props.courseId) return null
    const { FlatButton, ListItem, TextField } = MUI
    let courseId = this.props.courseId
    const styles = {
      label: {
        marginRight: '20px',
        minWidth: '80px',
        fontSize: '18px',
      },
      d1: {
        clear: 'both',
        float: 'left',
      },
      textField: {
        width: '80px',
      },
    }

    console.log("----",this.data.score ? this.data.score.className : '222');



    return (
      <div style={styles.d1}>
        <div>
          <label style={styles.label}>{this.data.score.studentId}</label>
          <label style={styles.label}>{this.data.score.className}</label>
          <label style={styles.label}>{this.data.score.studentName}</label>
          <label style={styles.label}>{this.props.courseName}</label>
          <TextField
            hintText="请输入成绩"
            onBlur={this._txtBlur}
            style={styles.textField}
             />
        </div>
      </div>
    )
  }
})
