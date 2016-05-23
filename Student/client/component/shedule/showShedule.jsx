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
    //按9月为划分
    const month = Number(moment().format('MM'))  //获取当前月份
    let year = Number(moment().format('YYYY'))  //获取当前年份
    let season
    if (month > 0 && month < 2) {
      season = '秋'
      year = year - 1
      semester = year + season
    }
    if (month > 1 && month < 8) {
      season = '春'
      semester = year + season
    }
    if (month > 8) {
      season = '秋'
      semester = year + season
    }
    console.log(month,year,season,semester);


    if (sub.ready()) {
      schedule = Schedule.find({semester: semester}).fetch();
      count1 = schedule.length
      for (let i = 0; i < count1; i++) {
        detailsList.push(schedule[i].details)
      }
      count2 = detailsList.length
      for (let j = 0; j < count2; j++) {
        all = [...all, ...detailsList[j]]
      }
      console.log("message",all);


//只选择属于该学生的课程
      let len = all.length
      for (let j = 0; j < len; j++) {
        let ss = all[j].studentList
        console.log("ss",ss);
        let studentId = Meteor.users.findOne({_id: Meteor.userId()}).profile.studentId
        console.log("sid",studentId);
        if (ss.indexOf(studentId) != "-1") {
          console.log("ssssss",ss);
          all2 = [...all2, ...all[j]]
        }
      }
      console.log(">>>",all2);
    }


    return {
      schedule:sub.ready() ? all2 : null,
      ready: sub.ready(),
    }
  },

  rendercourse() {
    const { List, ListItem, ActionGrade, ContentInbox, ContentDrafts, RaisedButton, ContentSend, Avatar, Divider } = MUI
    const styles = {
      span1: {
        marginRight: '8px',
        fontWeight: 'bold',
        color: 'black',
        // width: '20px',
      },
      span2: {
        marginRight: '36px',
        fontWeight: 'bold',
        // width: ''
      },
      span3: {
        marginRight: '20px',
        width: '140px',
        fontWeight: 'bold',
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
          style={{fontWeight: 'bold', color: 'black'}}
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
          {this.rendercourse()}
        </div>
      </div>
    )
  }
})
