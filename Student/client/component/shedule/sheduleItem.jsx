SheduleItem = React.createClass({
  render() {
    return (
      <div className="col-md-9">
          <div className="col-md-1">{this.props.shedule.sheduleId}</div>
          <div className="col-md-1">{this.props.shedule.when}</div>
          <div className="col-md-1">{this.props.shedule.courseName}</div>
          <div className="col-md-1">{this.props.shedule.teacherName}</div>
          <div className="col-md-1">{this.props.shedule.teacherOrganization}</div>
          <div className="col-md-1">{this.props.shedule.className}</div>
          <div className="col-md-1">{this.props.shedule.where}</div>
      </div>
    )
  }
})
