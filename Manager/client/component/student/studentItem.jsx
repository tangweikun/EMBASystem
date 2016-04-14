StudentItem = React.createClass({
  render() {
    return (
      <div className="col-md-9">
          <div className="col-md-1">{this.props.student.profile.studentId}</div>
          <div className="col-md-1">{this.props.student.profile.studentName}</div>
          <div className="col-md-1">{this.props.student.profile.gender}</div>
          <div className="col-md-1">{this.props.student.profile.IDNumber}</div>
          <div className="col-md-1">{this.props.student.profile.nation}</div>            <div className="col-md-1">{this.props.student.profile.politicalLandscape}</div>
          <div className="col-md-1">{this.props.student.profile.company}</div>
          <div className="col-md-1">{this.props.student.profile.position}</div>            <div className="col-md-1">{this.props.student.profile.admissionDate}</div>
          <div className="col-md-1">{this.props.student.profile.theClass}</div>
          <div className="col-md-1">{this.props.student.profile.category}</div>
          <div className="col-md-1">{this.props.student.profile.area}</div>
      </div>
    )
  }
})
