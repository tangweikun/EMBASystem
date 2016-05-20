Header = React.createClass({
  logout() {
    Meteor.logout()
    FlowRouter.go('/login')
  },
  render() {
    const { AppBar, RaisedButton } = MUI
    const screenWidth = window.innerWidth
    let header = {
      position: 'fixed',
      zIndex: '1',
      width: screenWidth,
    }
    return (
      <div style={header}>
        <AppBar
          title="河北工业大学EMBA综合管理系统"
          showMenuIconButton={false}
          iconElementRight={<RaisedButton label="退出" onMouseDown={this.logout} secondary={true} />}
          />
        </div>
    );
  }
});
