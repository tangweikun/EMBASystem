TrainingPlanItem = React.createClass({
  render() {
    return (
      <div className="col-md-9">
          <div className="col-md-2">{this.props.trainingPlan.details.courseId}</div>
          <div className="col-md-2">{this.props.trainingPlan.courseName}</div>
          <div className="col-md-2">{this.props.trainingPlan.details.category}</div>
          <div className="col-md-1">{this.props.trainingPlan.details.credit}</div>
          <div className="col-md-1">{this.props.trainingPlan.details.period}</div>
          <div className="col-md-1">{this.props.trainingPlan.state}</div>            <div className="col-md-1">{this.props.trainingPlan.status}</div>
          <div className="col-md-1">{this.props.trainingPlan.score}</div>
      </div>
    )
  }
})
