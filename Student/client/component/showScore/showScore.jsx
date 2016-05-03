ShowScore = React.createClass({    //选课
  mixins: [ReactMeteorData],

  getMeteorData() {
    let score
    let sub1 = Meteor.subscribe('score');
    let sub2 = Meteor.subscribe('users')

    // let trainingPlan = score.trainingPlan
    if (sub1.ready() && sub2.ready()) {
      let studentId = Meteor.users.findOne({_id: Meteor.userId()}).profile.studentId
      score = Score.findOne({studentId: studentId})
      console.log("score-->",score);

    }



    return {
      score: sub1.ready() ? score : null,
      ready: sub1.ready() && sub2.ready(),
    }
  },

  rendercourse() {
    function transform(obj) {
      let arr = []
      for (let item in obj) {
        arr.push(obj[item])
      }
      return arr
    }

    if (this.data.score) {
      trainingPlan = this.data.score.trainingPlan
      trainingPlan2 = transform(trainingPlan)
    }
    console.log(">>>",trainingPlan2);

    return trainingPlan2.map(function(a,n){
      if (a.status == '可选') {
        return <ScoreItem trainingPlan={a} key={n} />
      } else {
        return null
      }
    })
  },

  render() {
    if (!this.data.ready) return null

    return (
      <div>
        <div className="col-md-9">
            <div className="col-md-2">课程编号</div>
            <div className="col-md-2">课程名称</div>
            <div className="col-md-2">类别</div>
            <div className="col-md-1">学分</div>
            <div className="col-md-1">学时</div>
            <div className="col-md-1">课程状态</div>
            <div className="col-md-1">是否可选</div>
            <div className="col-md-1">选课</div>

        </div>
        {this.rendercourse()}
      </div>
    )
  }
})
