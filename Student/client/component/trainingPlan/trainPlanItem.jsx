TrainingPlanItem = React.createClass({
  render() {
    return (
      <div className="col-md-9">
          <div className="col-md-2">{this.props.details.courseId}</div>
          <div className="col-md-2">{this.props.details.courseName}</div>
          <div className="col-md-2">{this.props.details.category}</div>
          <div className="col-md-2">{this.props.details.credit}</div>
          <div className="col-md-2">{this.props.details.period}</div>
      </div>
    )
  }
})
