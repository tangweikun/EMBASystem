Nav = React.createClass({
  render() {
    const { List, ListItem, ActionGrade, ContentInbox, ContentDrafts, RaisedButton, ContentSend, Avatar, Divider } = MUI
    const styles = {
      sty1: {
        borderRight: 'solid 1px #DDDDDD',
      }
    }

    //按9月为划分
    const month = Number(moment().format('MM'))  //获取当前月份
    const year = Number(moment().format('YYYY'))  //获取当前年份
    const diff = month > 8 ? 0 : 1
    const year1 = year - diff
    const year2 = year - diff - 1
    console.log(month,year,diff,year1,year2);

    return (
    <div style={styles.sty1}>
      <List subheader="培养计划">
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-graduation-cap" aria-hidden="true"></i>} />}
        primaryText={year1 + "届培养计划"}
        href={FlowRouter.path(`/showtrainingplan${year1}`)}
      />
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-graduation-cap" aria-hidden="true"></i>} />}
        primaryText={year2 + "届培养计划"}
        href={FlowRouter.path(`/showtrainingplan${year2}`)}
      />
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-graduation-cap" aria-hidden="true"></i>} />}
        primaryText="历届培养计划"
        href={FlowRouter.path('/showtrainingplan')}
      />
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-pencil-square-o" aria-hidden="true"></i>} />}
        primaryText="添加培养计划"
        href={FlowRouter.path('/addtrainingplan')}
      />
    </List>
    <Divider />
    <List subheader="教师管理">
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-users" aria-hidden="true"></i>} />}
        primaryText="教师列表"
        href={FlowRouter.path('/showteacher')}
      />
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-user-plus" aria-hidden="true"></i>} />}
        primaryText="添加教师"
        href={FlowRouter.path('/addteacher')}
      />
    </List>
    <Divider />
    <List subheader="班级管理">
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-university" aria-hidden="true"></i>} />}
        primaryText="班级列表"
        href={FlowRouter.path('/showtheclass')}
      />
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-pencil-square-o" aria-hidden="true"></i>} />}
        primaryText="添加班级"
        href={FlowRouter.path('/addclass')}
      />
    </List>
    <Divider />
    <List subheader="学员管理">
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-users" aria-hidden="true"></i>} />}
        primaryText="学员列表"
        href={FlowRouter.path('/showstudent')}
      />
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-user-plus" aria-hidden="true"></i>} />}
        primaryText="添加学员"
        href={FlowRouter.path('/addstudent')}
      />
    </List>
    <Divider />
    <List subheader="课程表管理">
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-calendar" aria-hidden="true"></i>} />}
        primaryText="课程表"
        href={FlowRouter.path('/showschedule')}
      />
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-pencil-square-o" aria-hidden="true"></i>} />}
        primaryText="添加课程表"
        href={FlowRouter.path('/addschedule')}
      />
    </List>
    <Divider />
    <List subheader="选课管理">
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-envelope-o" aria-hidden="true"></i>} />}
        primaryText="选课申请"
        href={FlowRouter.path('/showcommit')}
    />
    </List>
    <Divider />
    <List subheader="成绩管理">
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-book" aria-hidden="true"></i>} />}
        primaryText="成绩列表"
        href={FlowRouter.path('/showscore')}
      />
      <ListItem
        leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-pencil-square-o" aria-hidden="true"></i>} />}
        primaryText="录入成绩"
        href={FlowRouter.path('/addscore')}
      />
    </List>
    <Divider />
      <List subheader="活动管理">
        <ListItem
          leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-cube" aria-hidden="true"></i>} />}
          primaryText="活动列表"
          href={FlowRouter.path('/showlecture')}
        />
        <ListItem
          leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-pencil-square-o" aria-hidden="true"></i>} />}
          primaryText="添加活动"
          href={FlowRouter.path('/addlecture')}
        />
      </List>
      <Divider />
        <List subheader="讲座管理">
          <ListItem
            leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-leaf" aria-hidden="true"></i>} />}
            primaryText="讲座列表"
            href={FlowRouter.path('/showactivity')}
          />
          <ListItem
            leftAvatar={<Avatar backgroundColor='#00bcd4' icon={<i className="fa fa-pencil-square-o" aria-hidden="true"></i>} />}
            primaryText="添加讲座"
            href={FlowRouter.path('/addactivity')}
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
