ShowTrainingPlan = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('score');
    let studentId = Meteor.users.findOne({_id: Meteor.userId()}).profile.studentId

    let score = Score.findOne({studentId: studentId})
    // let trainingPlan = score.trainingPlan

    return {
      score:sub.ready() ? score : null
    }
  },

  rendercourse() {
    function transform(obj) {
      let arr = []
      for (let item in obj) {
        arr.push(obj[item])
      }
      return arr
    }

    if (this.data.score) {
      trainingPlan = this.data.score.trainingPlan
      trainingPlan2 = transform(trainingPlan)
    }
    return this.data.score ? trainingPlan2.map(function(a,n){
      return <TrainingPlanItem details={a} key={n} />
    }) : null
  },

  render() {
    return (
      <div>
        <div className="col-md-9">
            <div className="col-md-2">课程编号</div>
            <div className="col-md-2">课程名称</div>
            <div className="col-md-2">类别</div>
            <div className="col-md-2">学分</div>
            <div className="col-md-2">学时</div>
        </div>
        {this.rendercourse()}
      </div>
    )
  }
})
