CommitItem = React.createClass({
  mixins: [ReactMeteorData],

  getInitialState() {
    return {
      disabled: '',
    }
  },

  getMeteorData() {
    let sub1 = Meteor.subscribe('commit')
    let sub2 = Meteor.subscribe('users')
    let disabled = ''
    let state
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
      disabled: sub1.ready() ? disabled : '',
      state: sub1.ready() ? state : '',
      ready: sub1.ready() && sub2.ready(),
    }
  },

  _onClick(e) {
    console.log("h",e.target.label);
    this.setState({
      disabled: 'disabled',
    })
    Meteor.call('commit',this.props.trainingPlan.details.courseId,this.props.trainingPlan.courseName)

  },
  render() {
    if (!this.data.ready) return null
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
        marginLeft: '40px',
      },
      courseName: {
        minWidth: '200px',
        float: 'left',
        fontSize: '20px',
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
        marginTop: '15px',
        marginLeft: '15px',
      }
    }
    return (
      <div style={styles.sty1}>
        <div>
          <div style={styles.courseName}>{this.props.trainingPlan.courseName}</div>
          <div style={styles.button}>
            <input
              type='button'
              value={this.data.state || '申请选课'} disabled={this.data.disabled || this.state.disabled} onClick={this._onClick}
              style={{
                color: '#ffffff',
                backgroundColor: '#00bcd4',
                border: 'none',
                minWidth: '80px',
                height: '40px',
                textAlign: 'center',
                fontSize: '18px',
                marginTop: '5px'}}
                />
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
