ScoreItem3 = React.createClass({
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
    if (!this.data.score) return null
    // if (!this.data.score.trainingPlan[courseId]) return null
    // if (!this.data.score.trainingPlan[courseId].score) return null
    const { FlatButton, ListItem, TextField } = MUI
    let courseId = this.props.courseId
    const styles = {
      label: {
        marginRight: '20px',
        minWidth: '100px',
        fontSize: '18px',
      },
      d1: {
        clear: 'both',
        float: 'left',
        marginLeft: '50px',
      },
      textField: {
        width: '80px',
      },
    }

    return (
      <div style={styles.d1}>
        <div>
          <label style={styles.label}>{this.data.score.studentId}</label>
          <label style={styles.label}>{this.data.score.className}</label>
          <label style={styles.label}>{this.data.score.studentName}</label>
          <label style={styles.label}>{this.props.courseName}</label>
          <label style={styles.label}>{this.data.score.trainingPlan[courseId].score}</label>
        </div>
      </div>
    )
  }
})
