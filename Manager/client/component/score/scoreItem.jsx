ScoreItem = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('score')
    let score = Score.findOne({studentId: this.props.studentId})
    console.log("message--",score);

    return {
      score: sub.ready() ? score : null,
      isReady: sub.ready()
    }
  },
  render() {
    let m = this.props.courseId
    if (!this.data.isReady || !m) {
      return <div></div>
    }

    console.log("000",m);
    console.log("message",this.data.score);
    console.log("----",this.data.score ? this.data.score.className : '222');



    return (
      <div className="col-md-9">
          <div className="col-md-2">{this.props.courseName}</div>
          <div className="col-md-2">twk</div>

          <div className="col-md-2">{this.props.studentId}</div>
          <div className="col-md-2">{this.data.score.className}</div>

          <div className="col-md-2">{this.data.score.trainingPlan[m].state}</div>
      </div>
    )
  }
})
