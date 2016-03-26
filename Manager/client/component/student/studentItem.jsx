StudentItem = React.createClass({
  render() {
    return (
      <div className="col-md-9">
          <div className="col-md-1">{this.props.student.studentId}</div>
          <div className="col-md-1">{this.props.student.studentName}</div>
          <div className="col-md-1">{this.props.student.gender}</div>
          <div className="col-md-1">{this.props.student.IDNumber}</div>
          <div className="col-md-1">{this.props.student.nation}</div>            <div className="col-md-1">{this.props.student.politicalLandscape}</div>
          <div className="col-md-1">{this.props.student.company}</div>
          <div className="col-md-1">{this.props.student.position}</div>            <div className="col-md-1">{this.props.student.admissionDate}</div>
          <div className="col-md-1">{this.props.student.theClass}</div>
          <div className="col-md-1">{this.props.student.category}</div>
          <div className="col-md-1">{this.props.student.area}</div>
      </div>
    )
  }
})
