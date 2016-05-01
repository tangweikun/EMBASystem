Nav = React.createClass({
  render() {
    const { List, ListItem, ActionGrade, ContentInbox, ContentDrafts, RaisedButton, ContentSend, Avatar, Divider } = MUI
    return (
    <div className="col-md-3">
      <List subheader="培养计划">
      <ListItem
        leftAvatar={<Avatar icon={<i className="fa fa-bars" aria-hidden="true"></i>} />}
        primaryText="2016届培养计划"
        href={FlowRouter.path('/showtrainingplan')}
      />
      <ListItem
        leftAvatar={<Avatar icon={<i className="fa fa-bars" aria-hidden="true"></i>} />}
        primaryText="2015届培养计划"
        href={FlowRouter.path('/showtrainingplan')}
      />
      <ListItem
        leftAvatar={<Avatar icon={<i className="fa fa-bars" aria-hidden="true"></i>} />}
        primaryText="历届培养计划"
        href={FlowRouter.path('/showtrainingplan')}
      />
      <ListItem
        leftAvatar={<Avatar icon={<i className="fa fa-bars" aria-hidden="true"></i>} />}
        primaryText="添加培养计划"
        href={FlowRouter.path('/addtrainingplan')}
      />
    </List>
    <Divider />
    <List subheader="教师管理">
      <ListItem
        leftAvatar={<Avatar icon={<i className="fa fa-bars" aria-hidden="true"></i>} />}
        primaryText="教师列表"
        href={FlowRouter.path('/showteacher')}
      />
      <ListItem
        leftAvatar={<Avatar icon={<i className="fa fa-bars" aria-hidden="true"></i>} />}
        primaryText="添加教师"
        href={FlowRouter.path('/addteacher')}
      />
    </List>
    <Divider />
    <List subheader="班级管理">
      <ListItem
        leftAvatar={<Avatar icon={<i className="fa fa-bars" aria-hidden="true"></i>} />}
        primaryText="班级列表"
        href={FlowRouter.path('/showtheclass')}
      />
      <ListItem
        leftAvatar={<Avatar icon={<i className="fa fa-bars" aria-hidden="true"></i>} />}
        primaryText="添加班级"
        href={FlowRouter.path('/addclass')}
      />
    </List>
    <Divider />
    <List subheader="学员管理">
      <ListItem
        leftAvatar={<Avatar icon={<i className="fa fa-bars" aria-hidden="true"></i>} />}
        primaryText="学员列表"
        href={FlowRouter.path('/showstudent')}
      />
      <ListItem
        leftAvatar={<Avatar icon={<i className="fa fa-bars" aria-hidden="true"></i>} />}
        primaryText="添加学员"
        href={FlowRouter.path('/addstudent')}
      />
    </List>
    <Divider />
    <List subheader="课程表管理">
      <ListItem
        leftAvatar={<Avatar icon={<i className="fa fa-bars" aria-hidden="true"></i>} />}
        primaryText="课程表"
        href={FlowRouter.path('/showschedule')}
      />
      <ListItem
        leftAvatar={<Avatar icon={<i className="fa fa-bars" aria-hidden="true"></i>} />}
        primaryText="添加课程表"
        href={FlowRouter.path('/addschedule')}
      />
    </List>
    <Divider />
    <List subheader="成绩管理">
      <ListItem
        leftAvatar={<Avatar icon={<i className="fa fa-bars" aria-hidden="true"></i>} />}
        primaryText="成绩列表"
        href={FlowRouter.path('/showcoursescore')}
      />
      <ListItem
        leftAvatar={<Avatar icon={<i className="fa fa-bars" aria-hidden="true"></i>} />}
        primaryText="录入成绩"
        href={FlowRouter.path('/addscore')}
      />
      </List>
      <Divider />



    {/*<Item title="首页" href="#" />
    <ItemHead title="交流平台" />
    <Item title="最新消息" href={FlowRouter.path('newmessage')} />
    <Item title="公共留言" href="#" />
    <Item title="内部消息" href="#" />
    <ItemHead title="成绩查询" />
    <Item title="课程" href={FlowRouter.path('showcoursescore')} />
    <Item title="活动" href={FlowRouter.path('showactivityscore')} />
    <Item title="讲座" href={FlowRouter.path('showlecturescore')} />
    <ItemHead title="成绩添加" />
    <Item title="添加课程成绩" href={FlowRouter.path('addscore')} />
    <Item title="添加活动成绩" href={FlowRouter.path('addactivityscore')} />
    <Item title="添加讲座成绩" href={FlowRouter.path('addlecturescore')} />
    <ItemHead title="查询入口" />
    <Item title="课程" href={FlowRouter.path('/showcourse')} />
    <Item title="教师" href={FlowRouter.path('/showteacher')} />
    <Item title="班级" href={FlowRouter.path('/showtheclass')} />
    <Item title="学员" href={FlowRouter.path('/showstudent')} />
    <Item title="培养计划" href={FlowRouter.path('/showtrainingplan')} />
    <Item title="课程表" href={FlowRouter.path('/showschedule')} />
    <Item title="管理员" href={FlowRouter.path('/showmanager')} />
    <Item title="活动" href={FlowRouter.path('/showactivity')} />
    <Item title="讲座" href={FlowRouter.path('/showlecture')} />
    <ItemHead title="添加入口" />
    <Item title="报考" href="#" />
    <Item title="添加课程" href={FlowRouter.path('/addcourse')} />
    <Item title="添加教师" href={FlowRouter.path('/addteacher')} />
    <Item title="添加班级" href={FlowRouter.path('/addclass')} />
    <Item title="添加学员" href={FlowRouter.path('/addstudent')} />
    <Item title="添加培养计划" href={FlowRouter.path('/addtrainingplan')} />
    <Item title="添加课程表" href={FlowRouter.path('/addschedule')} />
    <Item title="添加管理员" href={FlowRouter.path('/addmanager')} />
    <Item title="添加活动" href={FlowRouter.path('/addactivity')} />
    <Item title="添加讲座" href={FlowRouter.path('/addlecture')} />*/}
</div>
    )
  }
})
