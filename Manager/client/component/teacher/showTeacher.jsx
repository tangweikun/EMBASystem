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
        marginTop: '1px',
      },
    }
    return this.data.teacher.map(function(a,n){
      return (
        <div key={n} className='col-md-9'>
        <ListItem
          primaryText={a.teacherName}
          secondaryText={
            <div>
            <div style={styles.div1}>
              <span style={styles.span1}>性别</span>
              <span style={styles.span2}>{a.gender}</span>
              <span style={styles.span1}>学位</span>
              <span style={styles.span2}>{a.degree}</span>
              <span style={styles.span1}>职称</span>
              <span style={styles.span2}>{a.title}</span>
              <span style={styles.span1}>主讲课程</span>
              <span style={styles.span3}>{a.course}</span>
            <div>
              <span style={styles.span1}>单位</span>
              <span style={styles.span3}>{a.organization}</span>
            </div>
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
    const styles = {
      titleStyle: {
        fontSize: '22px',
        marginTop: '20px',
        marginBottom: '10px',
      },
    }
    return (
      <div>
        <div className="col-md-9" style={styles.titleStyle}>
          <span>教师列表</span>
        </div>
        <div>
          {this.renderTeacher()}
        </div>
      </div>
    )
  }
})
