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
        height: (standHeight - 99) + 'px',
      },
      container: {
        overflow: 'scroll',
        height: (standHeight - 99) + 'px',
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
        <div style={styles.body} className='row'>
          <div style={styles.nav} className='col-md-3'>
            <Nav />
          </div>
          <div style={styles.container} className='col-md-9'>
            {this.props.content}
          </div>
      </div>
      <Footer />
      </div>
    )
  }
})
