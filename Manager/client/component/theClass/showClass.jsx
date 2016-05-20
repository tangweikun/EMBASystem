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
        color: 'rgba(0, 0, 0, .87)',
        fontWeight: 'bold',
        // width: '20px',
      },
      span2: {
        fontWeight: 'bold',
        marginRight: '36px',
        // width: ''
      },
      span3: {
        fontWeight: 'bold',
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
          style={{color: 'black', fontWeight: 'bold'}}
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
            title='班级列表'
            showMenuIconButton={false}
            style={styles.bar}
            />
        </div>
        <div>
          {this.renderTeacher()}
        </div>
      </div>
    )
  }
})
