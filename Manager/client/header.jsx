Header = React.createClass({
  render() {
    const { AppBar } = MUI
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
          />
        </div>
    );
  }
});
