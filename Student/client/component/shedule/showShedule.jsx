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
      schedule:sub.ready() ? all2 : null
    }
  },

  rendercourse() {
    return this.data.schedule ? this.data.schedule.map(function(a,n){
      return <ScheduleItem schedule={a} key={n} />
    }) : null
  },

  render() {
    return (
      <div>
        <div className="col-md-9">
            <div className="col-md-1">序号</div>
            <div className="col-md-1">时间</div>
            <div className="col-md-1">课程</div>
            <div className="col-md-1">主讲教师</div>
            <div className="col-md-1">授课教师单位</div>
            <div className="col-md-1">上课班级</div>
            <div className="col-md-1">上课地点</div>
        </div>
        {this.rendercourse()}
      </div>
    )
  }
})
