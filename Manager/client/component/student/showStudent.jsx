ShowStudent = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe("users")
    let student = Meteor.users.find({'profile.roles': 'student'}).fetch()
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
        color: 'rgba(0, 0, 0, .87)',
        fontWeight: 'bold',
        // width: '20px',
      },
      span2: {
        marginRight: '36px',
        fontWeight: 'bold',
        // width: ''
      },
      span3: {
        marginRight: '20px',
        fontWeight: 'bold',
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
    const { RaisedButton, TextField, AppBar } = MUI
    const styles = {
      titleStyle: {
        fontSize: '22px',
        // marginTop: '20px',
        marginBottom: '10px',
      },
      bar: {
        width: '560px',
      },
    }
    return (
      <div>
        <div style={styles.titleStyle}>
          <AppBar
            title='学员列表'
            showMenuIconButton={false}
            style={styles.bar}
            />
        </div>
        <div>
          {this.renderstudent()}
        </div>
      </div>
    )
  }
})
