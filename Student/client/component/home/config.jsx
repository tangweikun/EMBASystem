Config = React.createClass({

  onTouchTap1() {
    FlowRouter.go('/changepassword')
  },

  onTouchTap2() {
    // FlowRouter.go('/newmessage')
  },

  onTouchTap3() {
    FlowRouter.go('/about')
  },

  onTouchTap4() {
    FlowRouter.go('/lecture')
  },

  logout() {
    Meteor.logout()
    FlowRouter.go('/login')
  },

  render() {
    const screenWidth = window.innerWidth  //iPhone5-->320  iPhone6-->375
    const {
      RaisedButton,
      FontIcon,
      Tabs,
      Tab,
      LeftNav,
      MenuItem,
      List,
      ListItem,
      Divider,
      Avatar,
      Colors,
      IconButton,
      IconMenu,
    } = MUI
    const styles = {
      style: {
        height: screenWidth * 0.25,
        width: screenWidth * 0.25,
      },
      label: {
        height: screenWidth * 0.15,
        width: screenWidth * 0.75,
        color: 'red',
      },
      button: {
        width: screenWidth,
        marginTop: '20px',
        height: '48px',
        fontSize: '16px',
        // marginLeft: screenWidth * 0.078,  //25px
      }
    }

    return (
      <div>
        <List>
          <ListItem
            leftIcon={<i className="fa fa-calendar fa-lg" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
            primaryText="重置密码"
            onTouchStart={this.onTouchTap1}
            onMouseDown={this.onTouchTap1}
            rightIcon={<i className="fa fa-chevron-right" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
          />
          <Divider />
          <ListItem
            leftIcon={<i className="fa fa-book fa-lg" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
            primaryText="新消息通知"
            onTouchStart={this.onTouchTap2}
            rightIcon={<i className="fa fa-chevron-right" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
          />
          <Divider />
            <ListItem
              leftIcon={<i className="fa fa-graduation-cap fa-lg" aria-hidden="true" style={{color: '#00bcd4',lineHeight: '24px'}}></i>}
              rightIcon={<i className="fa fa-chevron-right" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
              primaryText="关于我们"
              onTouchStart={this.onTouchTap3}
            />
          <Divider />
        </List>
        <RaisedButton label="退出" onTouchStart={this.logout}  style={styles.button} labelStyle={{fontSize: '20px'}}/>
      </div>
    )
  }
})
