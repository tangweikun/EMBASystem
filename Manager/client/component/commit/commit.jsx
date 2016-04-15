ShowCommit = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('commit');

    // let trainingPlan = score.trainingPlan
    if (sub.ready()) {
      commit = Commit.find({state: '申请中'}).fetch()
      console.log("----,,,",commit);

    }
    return {
      commit:sub.ready() ? commit : null,
      sub: sub.ready(),
    }
  },

  rendercourse() {
    console.log("----");
    console.log(">>",this.data.commit ? this.data.commit : 33);



    return this.data.commit ? this.data.commit.map(function(a,n){
        return <CommitItem commit={a} key={n} />
    }) : null
  },

  render() {
    return (
      <div>
        <div className="col-md-9">
            <div className="col-md-2">姓名</div>
            <div className="col-md-2">学号</div>
            <div className="col-md-2">班级</div>
            <div className="col-md-1">课程</div>
            <div className="col-md-1">课程号</div>
            <div className="col-md-1">课程状态</div>
            <div className="col-md-1">审批</div>
        </div>
        {this.rendercourse()}
      </div>
    )
  }
})
