TeacherItem = React.createClass({
  render() {
    return (
      <div className="col-md-9">
          <div className="col-md-1">{this.props.teacher.teacherId}</div>
          <div className="col-md-1">{this.props.teacher.teacherName}</div>
          <div className="col-md-1">{this.props.teacher.category}</div>
          <div className="col-md-1">{this.props.teacher.gender}</div>
          <div className="col-md-1">{this.props.teacher.title}</div>
          <div className="col-md-1">{this.props.teacher.degree}</div>
          <div className="col-md-1">{this.props.teacher.course}</div>
          <div className="col-md-1">{this.props.teacher.organization}</div>
      </div>
    )
  }
})
