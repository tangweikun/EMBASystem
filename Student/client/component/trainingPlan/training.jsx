Training = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let score
    let sub1 = Meteor.subscribe('score');
    let sub2 = Meteor.subscribe('users')
    if (sub1.ready() && sub2.ready()) {
      let studentId = Meteor.users.findOne({_id: Meteor.userId()}).profile.studentId
      score = Score.findOne({studentId: studentId})
    }
    return {
      score:sub1.ready() ? score : null,
      ready: sub1.ready() && sub2.ready(),
    }
  },

  rendercourse() {
    const { ListItem, Divider } = MUI
    const screenWidth = window.innerWidth
    const styles = {
      span1: {
        marginRight: '8px',
      },
      span2: {
        marginRight: '30px',
      },
      div1: {
        marginTop: '2px',
      },
    }
    function transform(obj) {
      let arr = []
      for (let item in obj) {
        arr.push(obj[item])
      }
      return arr
    }
    let trainingPlan = this.data.score.trainingPlan
    let trainingPlan2 = transform(trainingPlan)
    return trainingPlan2.map(function(a,n){
      return (
        <div key={n}>
        <ListItem
          primaryText={a.details.courseName}
          secondaryText={
            <div>
            <div style={styles.div1}>
              <span style={styles.span1}>状态</span>
              <span style={styles.span2}>{a.state}</span>
              <span style={styles.span1}>学分</span>
              <span style={styles.span2}>{a.details.credit}</span>
              <span style={styles.span1}>学时</span>
              <span style={styles.span2}>{a.details.period}</span>
            </div>
            <div>
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
    })
  },

  render() {
    const {AppBar} = MUI
    const screenWidth = window.innerWidth
    const styles = {
      div2: {
        width: screenWidth,
      }
    }
    if (!this.data.ready) return null
    return (
      <div style={styles.div2}>
        {this.rendercourse()}
      </div>
    )
  }
})
