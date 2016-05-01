ShowTeacher = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('teacher')
    let teacher = Teacher.find({}).fetch()
    return {
      teacher: teacher,
      ready: sub.ready(),
    }
  },

  renderTeacher() {
    const { List, ListItem, ActionGrade, ContentInbox, ContentDrafts, RaisedButton, ContentSend, Avatar, Divider } = MUI
    const styles = {
      label1: {
        marginRight: '8px',
        // width: '20px',
      },
      label2: {
        marginRight: '36px',
        // width: ''
      },
      label3: {
        marginRight: '20px',
        width: '140px',
      },
      div1: {
        marginTop: '10px',
      },
    }
    return this.data.teacher.map(function(a,n){
      return (
        <div key={n}>
        <ListItem
          primaryText={a.teacherName}
          secondaryText={
            <div>
            <div style={styles.div1}>
              <label style={styles.label1}>性别</label>
              <label style={styles.label2}>{a.gender}</label>
              <label style={styles.label1}>学位</label>
              <label style={styles.label2}>{a.degree}</label>
              <label style={styles.label1}>职称</label>
              <label style={styles.label2}>{a.title}</label>
              <label style={styles.label1}>单位</label>
              <label style={styles.label3}>{a.organization}</label>
              <label style={styles.label1}>主讲课程</label>
              <label style={styles.label3}>{a.course}</label>
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
    const { List, ListItem, ActionGrade, ContentInbox, ContentDrafts, RaisedButton, ContentSend, Avatar, Divider } = MUI
    return (
      <div>
        {this.renderTeacher()}
      </div>
    )
  }
})
