ScoreItem = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub1 = Meteor.subscribe('commit')
    let sub2 = Meteor.subscribe('users')
    let disabled = ''
    if (sub1.ready() && sub2.ready()) {
      let studentId = Meteor.users.findOne({_id: Meteor.userId()}).profile.studentId
      let commit = Commit.findOne({studentId: studentId,courseId: this.props.trainingPlan.details.courseId})
      console.log("message",commit);

      state = commit ? commit.state : ''
      if (state == '申请中' || state == '拒绝') {
        disabled = 'disabled'
      }
    }
    return {
      disabled: sub1.ready() ? disabled : ''
    }
  },

  _onClick() {
    console.log("h");
    Meteor.call('commit',this.props.trainingPlan.details.courseId,this.props.trainingPlan.courseName)

  },
  render() {
    return (
      <div className="col-md-9">
          <div className="col-md-2">{this.props.trainingPlan.details.courseId}</div>
          <div className="col-md-2">{this.props.trainingPlan.courseName}</div>
          <div className="col-md-2">{this.props.trainingPlan.details.category}</div>
          <div className="col-md-1">{this.props.trainingPlan.details.credit}</div>
          <div className="col-md-1">{this.props.trainingPlan.details.period}</div>
          <div className="col-md-1">{this.props.trainingPlan.state}</div>            <div className="col-md-1">{this.props.trainingPlan.status}</div>
          <div className="col-md-1"><input type="button" value="申请选课" onClick={this._onClick} disabled={this.data.disabled} /></div>
      </div>
    )
  }
})
