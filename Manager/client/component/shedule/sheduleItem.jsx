ScheduleItem = React.createClass({
  render() {
    return (
      <div className="col-md-9">
          <div className="col-md-1">{this.props.schedule.scheduleId}</div>
          <div className="col-md-1">{this.props.schedule.when}</div>
          <div className="col-md-1">{this.props.schedule.courseName}</div>
          <div className="col-md-1">{this.props.schedule.teacherName}</div>
          <div className="col-md-1">{this.props.schedule.teacherOrganization}</div>
          <div className="col-md-1">{this.props.schedule.className}</div>
          <div className="col-md-1">{this.props.schedule.where}</div>
      </div>
    )
  }
})
