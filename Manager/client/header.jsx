Header = React.createClass({
  render() {
    const { AppBar } = MUI
    const screenWidth = window.innerWidth
    let header = {
      // background: 'red',
      // height: '50px',
    }
    return (
      <div style={header} className="row">
        <AppBar
          title="河北工业大学EMBA综合管理系统"
          showMenuIconButton={false}
          />
        </div>
    );
  }
});
