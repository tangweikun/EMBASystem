ShowTrainingPlan = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('trainingPlan');
    let course = TrainingPlan.find({}).fetch();

    return {
      course:sub.ready() ? course : null
    }
  },

  rendercourse() {
    return this.data.course ? this.data.course.map(function(a,n){
      return <TrainingPlanItem course={a} key={n} />
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
