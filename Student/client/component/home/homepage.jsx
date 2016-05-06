HomePage = React.createClass({

  onTouchTap1() {
    FlowRouter.go('/train')
  },

  onTouchTap2() {
    FlowRouter.go('/schedule')
  },

  onTouchTap3() {
    FlowRouter.go('/score')
  },

  onTouchTap4() {
    FlowRouter.go('/')
  },

  onTouchTap5() {
    FlowRouter.go('/')
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
            onMouseEnter={this.onTouchTap1}
            onTouchTap={this.onTouchTap1}
            rightIcon={<i className="fa fa-chevron-right" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
          />
          <Divider />
          <ListItem
            leftIcon={<i className="fa fa-book fa-lg" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
            primaryText="课程表"
            onMouseEnter={this.onTouchTap2}
            onTouchTap={this.onTouchTap2}
            rightIcon={<i className="fa fa-chevron-right" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
            onTouchTap={this.onTouchTap}
          />
          <Divider />
            <ListItem
              leftIcon={<i className="fa fa-graduation-cap fa-lg" aria-hidden="true" style={{color: '#00bcd4',lineHeight: '24px'}}></i>}
              rightIcon={<i className="fa fa-chevron-right" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
              primaryText="我的成绩"
              onMouseEnter={this.onTouchTap3}
              onTouchTap={this.onTouchTap3}
            />
          <Divider />
            <ListItem
              leftIcon={<i className="fa fa-envelope-o fa-lg" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
              primaryText="讲座公告"
              onMouseEnter={this.onTouchTap4}
              onTouchTap={this.onTouchTap4}
              rightIcon={<i className="fa fa-chevron-right" aria-hidden="true" style={{color: '#00bcd4',lineHeight: '24px'}}></i>}
            />
         <Divider />
            <ListItem
                leftIcon={<i className="fa fa-envelope-o fa-lg" aria-hidden="true" style={{lineHeight: '24px', color: '#00bcd4'}}></i>}
                primaryText="活动公告"
                onMouseEnter={this.onTouchTap5}
                onTouchTap={this.onTouchTap5}
                rightIcon={<i className="fa fa-chevron-right" aria-hidden="true" style={{color: '#00bcd4',lineHeight: '24px'}}></i>}
              />
              <Divider />
        </List>
      </div>
    )
  }
})
