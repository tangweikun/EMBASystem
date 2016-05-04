Layout = React.createClass({
  render() {
    const { Tabs, Tab, AppBar, FontIcon, IconButton } = MUI
    const screenWidth = window.innerWidth
    let layout = {
      position: 'relative',
    }
    const styles = {
      footer: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 0,
      background: '#00bcd4',
      zIndex: '1',
      },
      body: {
        position: 'absolute',
        top: '100px',
        bottom: '100px',
        height: '100px',
    /* 使之可以滚动 */
    // overflow-y: scroll;
      },
      header: {
        position: 'fixed',
        top: 0,
        width: screenWidth,
        zIndex: '14',
      },
      label: {
        marginLeft: '50px',
      }

    }
    return (
      <div style={layout}>
        <div style={styles.header}>
          <AppBar
            title="我的培养计划"
            showMenuIconButton={false}
            />
        </div>
        <div style={styles.body}>
            {this.props.content}
        </div>

        <div style={styles.footer}>
          <label style={styles.label}><a href='/'><i className="fa fa-diamond fa-2x" aria-hidden="true"></i></a></label>
          <label style={styles.label}><a href='/score'><i className="fa fa-diamond fa-2x" aria-hidden="true"></i></a></label>
          <label style={styles.label}><a href='/login'><i className="fa fa-diamond fa-2x" aria-hidden="true"></i></a></label>
            <IconButton
              iconClassName="material-icons"
              tooltip="Ligature"
              >
              home
            </IconButton>
        </div>
      </div>
    )
  }
})
