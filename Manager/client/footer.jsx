Footer = React.createClass({
  render() {
    const { AppBar } = MUI
    const screenWidth = window.innerWidth
    let footer = {
      position: 'fixed',
      zIndex: '1',
      width: screenWidth,
      bottom: 0,
      background: '#00bcd4',
      color: '#ffffff',
      fontSize: '16px',
      textAlign: 'center',
      height: '35px',
      lineHeight: '35px',
    }
    return (
      <div style={footer} className="row">
        Powered by Meteor 1.3 | Designed by 河北工业大学EMBA教育中心
      </div>
    )
  }
});
