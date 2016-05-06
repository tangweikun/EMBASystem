HomePage = React.createClass({

  onTouchTap() {
    console.log("twk");
    FlowRouter.go('/train')
    return null
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
      }
    }

    return (
      <div>
        <List>
          <ListItem
            leftIcon={<i className="fa fa-calendar fa-lg" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
            primaryText="培养计划"
            onMouseEnter={this.onTouchTap}
            rightIcon={<i className="fa fa-chevron-right" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
          />
          <Divider />
          <ListItem
            leftIcon={<i className="fa fa-book fa-lg" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
            primaryText="课程表"
            rightIcon={<i className="fa fa-chevron-right" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
            onTouchTap={this.onTouchTap}
          />
          <Divider />
            <ListItem
              leftIcon={<i className="fa fa-graduation-cap fa-lg" aria-hidden="true" style={{color: '#00bcd4',lineHeight: '24px'}}></i>}
              rightIcon={<i className="fa fa-chevron-right" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
              primaryText="我的成绩"
            />
            <Divider />
        </List>

        <List>
          <ListItem
            leftIcon={<i className="fa fa-envelope-o fa-lg" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
            primaryText="讲座公告"
            rightIcon={<i className="fa fa-chevron-right" aria-hidden="true" style={{color: '#ffffff',lineHeight: '24px'}}></i>}
          />
          <Divider />
          <ListItem
            leftIcon={<i className="fa fa-envelope-o fa-lg" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
            primaryText="活动公告"
            rightIcon={<i className="fa fa-chevron-right" aria-hidden="true" style={{color: '#00bcd4',lineHeight: '24px'}}></i>}
          />
          <Divider />
        </List>
      </div>
    )
  }
})
