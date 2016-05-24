ShowScore = React.createClass({    //选课
  mixins: [ReactMeteorData],

  getMeteorData() {
    let score
    let commit
    let sub1 = Meteor.subscribe('score')
    let sub2 = Meteor.subscribe('users')
    let sub3 = Meteor.subscribe('commit')

    // let trainingPlan = score.trainingPlan
    if (sub1.ready() && sub2.ready()) {
      let studentId = Meteor.users.findOne({_id: Meteor.userId()}).profile.studentId
      score = Score.findOne({studentId: studentId})
      commit = Commit.findOne({studentId: studentId})
      console.log("score-->",score);
    }
    return {
      score: sub1.ready() ? score : null,
      commit: sub3.ready() ? commit : null,
      ready: sub1.ready() && sub2.ready() && sub3.ready(),
    }
  },

  rendercourse() {
    const { ListItem, Divider } = MUI
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
        marginTop: '10px',
      },
    }
    function transform(obj) {
      let arr = []
      for (let item in obj) {
        arr.push(obj[item])
      }
      return arr
    }
    const commit = this.data.commit

    if (this.data.score) {
      trainingPlan = this.data.score.trainingPlan
      trainingPlan2 = transform(trainingPlan)
    }
    console.log(">>>",trainingPlan2);

    return trainingPlan2.map(function(a,n){
      if (a.score) {
        return (
          <div key={n}>
          <ListItem
            primaryText={a.courseName}
            secondaryText={
              <div>
              <div style={styles.div1}>
                <span style={styles.span1}>成绩</span>
                <span style={styles.span3}>{a.score}</span>
                <span style={styles.span1}>学分</span>
                <span style={styles.span3}>{a.details.credit}</span>
                <span style={styles.span1}>考察方式</span>
                <span style={styles.span3}>{a.details.evaluationMode}</span>
                <span style={styles.span1}>类别</span>
                <span style={styles.span2}>{a.details.category}</span>
              </div>
            </div>
            }
            secondaryTextLines={2}
          />
        <Divider />
          </div>
        )
      } else {
        return null
      }
    })
  },

  render() {
    if (!this.data.ready) return null
    return (
      <div>
        {this.rendercourse()}
      </div>
    )
  }
})
