ShowTrainingPlan = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('trainingPlan');
    let course = TrainingPlan.find({}).fetch();

    return {
      course:sub.ready() ? course : null
    }
  },

  rendercourse() {
    const { List, ListItem, ActionGrade, ContentInbox, ContentDrafts, RaisedButton, ContentSend, Avatar, Divider } = MUI
    const styles = {

    }
    return this.data.course ? this.data.course.map(function(a,n){
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
            </div>
            <div>
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
    }) : null
  },

  render() {
    return (
      <div>
        <div className="col-md-9">
            <div className="col-md-2">课程编号</div>
            <div className="col-md-2">课程名称</div>
            <div className="col-md-2">类别</div>
            <div className="col-md-2">学分</div>
            <div className="col-md-2">学时</div>
        </div>
        {this.rendercourse()}
      </div>
    )
  }
})
