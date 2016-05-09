Layout = React.createClass({
  render() {
    const { List, ListItem, ActionGrade, ContentInbox, ContentDrafts, RaisedButton, ContentSend, Avatar, Divider, AppBar } = MUI
    let layout = {
      position: 'relative',
      left: '0px',
      overflow: 'hidden',
    }
    const standHeight = window.innerHeight
    const standWidth = window.innerWidth
    const styles = {
      body: {
        marginTop: '65px',
        overflow: 'hidden',
      },
      nav: {
        overflow: 'scroll',
        height: (standHeight - 105) + 'px',
        width: '230px',
        float: 'left',
      },
      container: {
        overflow: 'scroll',
        height: (standHeight - 105) + 'px',
        float: 'left',
        width: (standWidth - 260) + 'px',
        marginLeft: '30px',
      },
      footer: {
        position: 'fixed',
        zIndex: '1',
        bottom: 0,
        width: standWidth,
      }
    }
    return (
      <div style={layout}>
        <Header />
        <div style={styles.body}>
          <div style={styles.nav}>
            <Nav />
          </div>
          <div style={styles.container}>
            {this.props.content}
          </div>
      </div>
      <Footer />
      </div>
    )
  }
})
