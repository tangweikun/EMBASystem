ShowSchedule = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('schedule');
    let schedule = Schedule.find({}).fetch();

    return {
      schedule:sub.ready() ? schedule : null
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
