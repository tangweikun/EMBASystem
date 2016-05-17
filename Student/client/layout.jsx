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
      textAlign: 'center',
      height: '45px',
      lineHeight: '45px',
      },
      body: {
        position: 'relative',
        top: '64px',
        marginBottom: '45px',
        // height: '100px',
    /* 使之可以滚动 */
    // overflowY: 'scroll',
      },
      header: {
        position: 'fixed',
        top: 0,
        width: screenWidth,
        zIndex: '14',
        height: '64px',
      },
      label: {
        minWidth: '90px',
        paddingTop: '5px',
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
          <label style={styles.label}>
            <a href='/'>
              <i className="fa fa-search fa-2x" aria-hidden="true" style={{color:'#ffffff'}}></i>
            </a>
          </label>
          <label style={styles.label}>
            <a href='/commit'>
              <i className="fa fa-plus fa-2x" aria-hidden="true"  style={{color:'#ffffff'}}></i>
            </a>
          </label>
          <label style={styles.label}>
            <a href='/'>
              <i className="fa fa-cog fa-2x" aria-hidden="true"  style={{color:'#ffffff'}}></i>
            </a>
          </label>
        </div>
      </div>
    )
  }
})
