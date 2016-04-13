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

    }





    return {
      schedule:sub.ready() ? all : null
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
