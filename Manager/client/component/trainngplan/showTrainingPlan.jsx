ShowTrainingPlan = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('trainingPlan')
    console.log(this.props.annual)

    let course = TrainingPlan.find({annual: String(this.props.annual)}).fetch()
    return {
      course:sub.ready() ? course : null,
      ready: sub.ready(),
    }
  },

  rendercourse() {
    const { List, ListItem, ActionGrade, ContentInbox, ContentDrafts, RaisedButton, ContentSend, Avatar, Divider } = MUI
    const styles = {
      span1: {
        marginRight: '8px',
        color: 'rgba(0, 0, 0, .87)',
        fontWeight: 'bold',
      },
      span2: {
        marginRight: '36px',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, .67)',
      },
      div1: {
        marginTop: '10px',
      },
    }
    return this.data.course.map(function(a,n){
      return (
        <div key={n} className='col-md-9'>
        <ListItem
          style={{color: 'black', fontWeight: 'bold'}}
          primaryText={a.courseName}
          secondaryText={
            <div>
            <div style={styles.div1}>
              <span style={styles.span1}>课程编号</span>
              <span style={styles.span2}>{a.courseId}</span>
              <span style={styles.span1}>学分</span>
              <span style={styles.span2}>{a.credit}</span>
              <span style={styles.span1}>学时</span>
              <span style={styles.span2}>{a.period}</span>
              <span style={styles.span1}>类别</span>
              <span style={styles.span2}>{a.category}</span>
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
    const {AppBar, ListItem, CircularProgress} = MUI
    console.log(">>>>",this.data.course.length);

    if (!this.data.course.length) {
      return <div style={{ marginLeft: '50px', marginTop: '70px'}}>
        <div style={{marginBottom: '70px', fontSize: '18px'}}>您所查询的内容不存在，请在重新输入所需查找的培养计划届数，如'2013'</div>
        <CircularProgress size={1} />
        <CircularProgress size={1.5} />
        <CircularProgress size={2} />
        <CircularProgress size={2.5} />
        </div>
    }

    const styles = {
      titleStyle: {
        fontSize: '22px',
        marginTop: '20px',
        marginBottom: '10px',
      },
    }
    return (
      <div>
          {this.rendercourse()}
      </div>
    )
  }
})
