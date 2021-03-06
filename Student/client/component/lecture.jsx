ShowLecture = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('lecture')
    let lecture = Lecture.find({}).fetch()
    return {
      lecture: lecture,
      ready: sub.ready(),
    }
  },

  renderTeacher() {
    const { List, ListItem, ActionGrade, ContentInbox, ContentDrafts, RaisedButton, ContentSend, Avatar, Divider } = MUI
    const styles = {
      span1: {
        marginRight: '8px',
        fontWeight: 'bold',
        color: 'black',
        // width: '20px',
      },
      span2: {
        marginRight: '36px',
        fontWeight: 'bold',
        // width: ''
      },
      span3: {
        marginRight: '20px',
        width: '140px',
        fontWeight: 'bold',
      },
      div1: {
        // marginTop: '10px',
      },
    }
    return this.data.lecture.map(function(a,n){
      return (
        <div key={n}>
        <ListItem
          primaryText={a.topic}
          style={{fontWeight: 'bold', color: 'black'}}
          secondaryText={
            <div>
            <div style={styles.div1}>
              <span style={styles.span1}>日期</span>
              <span style={styles.span3}>{a.date}</span>
              <span style={styles.span1}>时间</span>
              <span style={styles.span3}>{a.time}</span>
            </div>
            <div>
              <span style={styles.span1}>地点</span>
              <span style={styles.span2}>{a.where}</span>
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
          {this.renderTeacher()}
        </div>
    )
  }
})
