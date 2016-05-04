ShowSchedule = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('schedule');
    let schedule = ''
    let t1 = ''
    let count
    let t3 = ''
    let all = []
    let detailsList = []
    let count1
    let count2
    let all2 = []
    if (sub.ready()) {
      schedule = Schedule.find({}).fetch();
      count1 = schedule.length
      for (let i = 0; i < count1; i++) {
        // if (schedule[i].details.xuanke)
        console.log("<<<<MMD",schedule[i].details);

          detailsList.push(schedule[i].details)
      }
      count2 = detailsList.length
      for (let j = 0; j < count2; j++) {
        console.log("CCC",detailsList[j]);

        all = [...all, ...detailsList[j]]
      }
      for (let k = 0; k < all.length; k++) {
        if (!all[k].xuanke) {
          all2.push(all[k])
        }
      }
      console.log("CCVVV",all2);

      console.log("message",all);
    }
    return {
      schedule:sub.ready() ? all2 : null,
      ready: sub.ready(),
    }
  },

  renderTeacher() {
    const { List, ListItem, ActionGrade, ContentInbox, ContentDrafts, RaisedButton, ContentSend, Avatar, Divider } = MUI
    const styles = {
      span1: {
        marginRight: '8px',
        // width: '20px',
      },
      span2: {
        marginRight: '36px',
        // width: ''
      },
      span3: {
        marginRight: '20px',
        width: '140px',
      },
      div1: {
        marginTop: '1px',
      },
    }
    return this.data.schedule.map(function(a,n){
      return (
        <div key={n} className='col-md-9'>
        <ListItem
          primaryText={a.courseName}
          secondaryText={
            <div>
            <div style={styles.div1}>
              <span style={styles.span1}>上课时间</span>
              <span style={styles.span2}>{a.when}</span>
              <span style={styles.span1}>上课地点</span>
              <span style={styles.span2}>{a.where}</span>
              <span style={styles.span1}>上课班级</span>
              <span style={styles.span3}>{a.className}</span>
            <div>
              <span style={styles.span1}>上课教师</span>
              <span style={styles.span2}>{a.teacherName}</span>
              <span style={styles.span1}>教师单位</span>
              <span style={styles.span3}>{a.teacherOrganization}</span>
            </div>
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
    const styles = {
      titleStyle: {
        fontSize: '22px',
        marginTop: '20px',
        marginBottom: '10px',
      },
    }
    return (
      <div>
        <div className="col-md-9" style={styles.titleStyle}>
          <span>课程表</span>
        </div>
        <div>
          {this.renderTeacher()}
        </div>
      </div>
    )
  }
})
