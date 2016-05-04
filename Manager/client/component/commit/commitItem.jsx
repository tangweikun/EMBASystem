CommitItem = React.createClass({

  _onClick(e) {
    let state = e.target.value
    Meteor.call('approval', this.props.commit.studentId, this.props.commit.courseId, state)
    if (state == '同意') {
      Meteor.call('chanSch', this.props.commit.studentId, this.props.commit.courseId,state)
      Meteor.call('chanSco', this.props.commit.studentId, this.props.commit.courseId, this.props.commit.courseName,state)
    } else {
      Meteor.call('refuse', this.props.commit.studentId, this.props.commit.courseId, this.props.commit.courseName,state)
    }
  },
  render() {
    const { ListItem, Divider, RaisedButton } = MUI
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
      button: {
        float: 'left',
        marginLeft: '50px',
      },
      courseName: {
        minWidth: '200px',
        float: 'left',
        fontSize: '22px',
        lineHeight: '40px',
        height: '40px',
      },
      d2: {
        clear: 'both',
        display: 'flex',
      },
      label: {
        fontSize: '18px',
        marginRight: '8px',
      },
      sty1: {
        marginBottom: '15px',
      }
    }
    return (
      <div style={styles.sty1}>
        <div style={styles.d2}>
          <label style={styles.label}>{this.props.commit.studentName}</label>
          <label style={styles.label}>{this.props.commit.courseName}</label>
          <label style={styles.label}>{this.props.commit.studentId}</label>
          <label style={styles.label}>{this.props.commit.theClass}</label>
          <div><input type="button" value="同意" onClick={this._onClick}  /></div>
          <div><input type="button" value="拒绝" onClick={this._onClick}  /></div>
        </div>
      <Divider />
      </div>

    )
  }
})
