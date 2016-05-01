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
        <ListItem
          leftAvatar={<Avatar src="http://ijiankang2.kss.ksyun.com/avatar/u4u7HBmehxKRjHBaZ.png?1460973269798" />}
          primaryText={ "汤伟坤"  }
          secondaryText={
            <p>
              <span style={{color: 'gray'}}>班级：信管121</span>
            </p>
          }
        />
        <Divider inset={true} />
        <List>
          <ListItem
            leftAvatar={<Avatar src="http://ijiankang2.kss.ksyun.com/avatar/u4u7HBmehxKRjHBaZ.png?1460973269798" />}
            primaryText="我的培养计划"
            onMouseEnter={this.onTouchTap}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src="http://ijiankang2.kss.ksyun.com/avatar/u4u7HBmehxKRjHBaZ.png?1460973269798" />}
            primaryText="我的课程表"
            onTouchTap={this.onTouchTap}
          />
          <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="http://ijiankang2.kss.ksyun.com/avatar/u4u7HBmehxKRjHBaZ.png?1460973269798" />}
              primaryText="我的成绩"
            />
            <Divider inset={true} />
        </List>

        <List>
          <ListItem
            leftAvatar={<Avatar src="http://ijiankang2.kss.ksyun.com/avatar/u4u7HBmehxKRjHBaZ.png?1460973269798" />}
            primaryText="讲座公告"
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src="http://ijiankang2.kss.ksyun.com/avatar/u4u7HBmehxKRjHBaZ.png?1460973269798" />}
            primaryText="活动公告"
          />
          <Divider inset={true} />
        </List>

        <ListItem
          leftAvatar={<Avatar src="http://ijiankang2.kss.ksyun.com/avatar/u4u7HBmehxKRjHBaZ.png?1460973269798" />}
          primaryText="我要选课"
        />
        <Divider inset={true} />
      </div>
    )
  }
})
