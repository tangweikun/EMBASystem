ShowTrainingPlan = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('trainingPlan')
    console.log(this.props.annual)

    let course = TrainingPlan.find({annual: String(this.props.annual)}).fetch()
    return {
      course:sub.ready() ? course : null,
      ready: sub.ready(),
    }
  },

  rendercourse() {
    const { List, ListItem, ActionGrade, ContentInbox, ContentDrafts, RaisedButton, ContentSend, Avatar, Divider } = MUI
    const styles = {
      span1: {
        marginRight: '8px',
        color: 'black',
        fontWeight: 'bold',
      },
      span2: {
        marginRight: '36px',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, .67)',
      },
      div1: {
        marginTop: '10px',
      },
    }
    return this.data.course.map(function(a,n){
      return (
        <div key={n} className='col-md-9'>
        <ListItem
          style={{color: 'black', fontWeight: 'bold'}}
          primaryText={a.courseName}
          secondaryText={
            <div>
            <div style={styles.div1}>
              <span style={styles.span1}>课程编号</span>
              <span style={styles.span2}>{a.courseId}</span>
              <span style={styles.span1}>学分</span>
              <span style={styles.span2}>{a.credit}</span>
              <span style={styles.span1}>学时</span>
              <span style={styles.span2}>{a.period}</span>
              <span style={styles.span1}>类别</span>
              <span style={styles.span2}>{a.category}</span>
            </div>
          </div>
          }
          secondaryTextLines={2}
        />
      <Divider />
        </div>
      )
    })
  },

  render() {
    if (!this.data.ready) return null
    const {AppBar,ListItem} = MUI
    const styles = {
      titleStyle: {
        fontSize: '22px',
        marginTop: '20px',
        marginBottom: '10px',
      },
    }
    return (
      <div>
        { this.props.annual ?
            <div className="col-md-9" style={styles.titleStyle}>
              <span>{this.props.annual}届培养计划</span>
            </div> : null
        }
        <div>
          {this.rendercourse()}
        </div>
      </div>
    )
  }
})
