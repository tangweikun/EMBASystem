ShowStudent = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe("users")
    let student = Meteor.users.find({roles: 'student'}).fetch()
    return {
      student: sub.ready() ? student : null,
      ready: sub.ready(),
    }
  },

  renderstudent() {
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
        // width: '140px',
      },
      div1: {
        marginTop: '1px',
      },
    }
    return this.data.student.map(function(a,n){
      return (
        <div key={n} className='col-md-9'>
        <ListItem
          primaryText={a.profile.studentName}
          secondaryText={
            <div>
            <div style={styles.div1}>
              <span style={styles.span1}>班级</span>
              <span style={styles.span2}>{a.profile.theClass}</span>
              <span style={styles.span1}>学号</span>
              <span style={styles.span2}>{a.profile.studentId}</span>
              <span style={styles.span1}>性别</span>
              <span style={styles.span2}>{a.profile.gender}</span>
              <span style={styles.span1}>民族</span>
              <span style={styles.span3}>{a.profile.nation}</span>
              <span style={styles.span1}>单位</span>
              <span style={styles.span3}>{a.profile.company}</span>
            </div>
            <div style={styles.div1}>
              <span style={styles.span1}>党派</span>
              <span style={styles.span2}>{a.profile.politicalLandscape}</span>
              <span style={styles.span1}>类别</span>
              <span style={styles.span2}>{a.profile.category}</span>
              <span style={styles.span1}>录取日期</span>
              <span style={styles.span2}>{a.profile.admissionDate}</span>
              <span style={styles.span1}>职务</span>
              <span style={styles.span3}>{a.profile.position}</span>
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
          <label>学员列表</label>
        </div>
        <div>
          {this.renderstudent()}
        </div>
      </div>
    )
  }
})
