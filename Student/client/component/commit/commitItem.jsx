CommitItem = React.createClass({
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
    const { ListItem, Divider, RaisedButton } = MUI
    const screenWidth = window.innerWidth
    const styles = {
      span1: {
        marginRight: '8px',
      },
      span2: {
        marginRight: '30px',
      },
      div1: {
        marginTop: '2px',
      },
      button: {
        float: 'left',
        marginLeft: '50px',
      },
      courseName: {
        minWidth: '200px',
        float: 'left',
        fontSize: '22px',
        lineHeight: '40px',
        height: '40px',
      },
      d2: {
        clear: 'both'
      },
      label: {
        fontSize: '18px',
        marginRight: '8px',
      },
      sty1: {
        marginBottom: '15px',
      }
    }
    return (
      <div style={styles.sty1}>
        <div>
          <div style={styles.courseName}>{this.props.trainingPlan.courseName}</div>
          <div style={styles.button}>
            <RaisedButton
              label="Secondary"
              secondary={true}
              disabled={this.data.disabled}
              onTouchEnd={this._onClick}
              onMouseDown={this._onClick} />
            </div>
        </div>
        <div style={styles.d2}>
          <label style={styles.label}>{this.props.trainingPlan.details.category}</label>
          <label style={styles.label}>{this.props.trainingPlan.details.credit}学分</label>
          <label style={styles.label}>{this.props.trainingPlan.details.period}学时</label>
        </div>
      <Divider />

      </div>
    )
  }
})
