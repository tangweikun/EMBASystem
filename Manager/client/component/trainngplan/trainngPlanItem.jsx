TrainngPlanItem = React.createClass({
  render() {
    return (
      <div className="col-md-9">
          <div className="col-md-2">{this.props.course.courseId}</div>
          <div className="col-md-2">{this.props.course.courseName}</div>
          <div className="col-md-2">{this.props.course.category}</div>
          <div className="col-md-2">{this.props.course.credit}</div>
          <div className="col-md-2">{this.props.course.period}</div>
      </div>
    )
  }
})
