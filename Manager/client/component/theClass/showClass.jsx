ShowClass = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('theclass')
    let theClass = TheClass.find({}).fetch()
    return {
      theClass: theClass,
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
        marginTop: '10px',
      },
    }
    return this.data.theClass.map(function(a,n){
      return (
        <div key={n} className='col-md-9'>
        <ListItem
          primaryText={a.className}
          secondaryText={
            <div>
            <div style={styles.div1}>
              <span style={styles.span1}>班号</span>
              <span style={styles.span2}>{a.classId}</span>
              <span style={styles.span1}>班主管</span>
              <span style={styles.span2}>{a.diretor}</span>
              <span style={styles.span1}>建班日期</span>
              <span style={styles.span3}>{a.date}</span>
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
          <span>班级列表</span>
        </div>
        <div>
          {this.renderTeacher()}
        </div>
      </div>
    )
  }
})
