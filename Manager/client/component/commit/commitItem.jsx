CommitItem = React.createClass({

  _onClick(e) {
    console.log("h");
    console.log(e.target.value);
    let state = e.target.value
    Meteor.call('approval', this.props.commit.studentId, this.props.commit.courseId, state)
    Meteor.call('chanSch', this.props.commit.studentId, this.props.commit.courseId)
    Meteor.call('chanSco', this.props.commit.studentId, this.props.commit.courseId, this.props.commit.courseName)


  },
  render() {
    console.log("--->");

    return (
      <div className="col-md-9">
          <div className="col-md-2">{this.props.commit.studentName}</div>
          <div className="col-md-2">{this.props.commit.studentId}</div>
          <div className="col-md-2">{this.props.commit.theClass}</div>
          <div className="col-md-1">{this.props.commit.courseName}</div>
          <div className="col-md-1">{this.props.commit.courseId}</div>
          <div className="col-md-1">{this.props.commit.state}</div>
          <div className="col-md-1"><input type="button" value="同意" onClick={this._onClick}  /></div>
          <div className="col-md-1"><input type="button" value="拒绝" onClick={this._onClick}  /></div>
      </div>
    )
  }
})
