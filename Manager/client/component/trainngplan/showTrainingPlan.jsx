ShowTrainingPlan = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('trainingPlan');
    let course = TrainingPlan.find({}).fetch();
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
      },
      span2: {
        marginRight: '36px',
      },
      div1: {
        marginTop: '10px',
      },
    }
    return this.data.course.map(function(a,n){
      return (
        <div key={n} className='col-md-9'>
        <ListItem
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
        marginTop: '15px',
      },
    }
    return (
      <div>
        <div className="col-md-9" style={styles.titleStyle}>
          <label>2016届培养计划</label>
        </div>
        <div>
          {this.rendercourse()}
        </div>
      </div>
    )
  }
})
