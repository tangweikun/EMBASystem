AddScore = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub1 = Meteor.subscribe('score')
    let sub2 = Meteor.subscribe('schedule')
    let score = Score.find({}).fetch()
    let schedule = Schedule.find({}).fetch()
    let oneSchedule = Schedule.findOne({courseName: '电子商务'})
    return {
      score: sub1.ready() ? score : null,
      schedule: sub2.ready() ? schedule : null,
      oneSchedule: sub2.ready() ? oneSchedule : null
    }
  },

  renderScore() {
    Array.prototype.deleteEle = function () {
                var o = {}, newArr = [], i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof (o[this[i]]) == "undefined") {
                        o[this[i]] = "";
                    }
                }
                for (j in o) {
                    newArr.push(j)
                }
                return newArr;
            }
    let oneSchedule
    let studentList
    let groupNum
    let all = []
    oneSchedule = this.data.oneSchedule
    studentList = oneSchedule ? oneSchedule.studentList : ''
    groupNum = studentList.length
    for (let i = 0; i < groupNum; i++) {
      all = [...all, ...studentList[i]]
    }
    let list = all.deleteEle()

    console.log(">>>>>>>",list);

    return list.length > 0 ? list.map(function(a,n){
      return <ScoreItem courseName="电子商务"  key={n} studentId={a} />
    }) : null

  },


  render() {
    return (
      <div>
        <div className="col-md-9">
            <div className="col-md-2">课程名称</div>
            <div className="col-md-2">姓名</div>
            <div className="col-md-2">学号</div>
            <div className="col-md-2">班级</div>
            <div className="col-md-2">成绩</div>
        </div>
        {this.renderScore()}
      </div>
    )
  }
})
