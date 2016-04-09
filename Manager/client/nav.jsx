Nav = React.createClass({
  render() {
    let nav = {
      // position: 'absolute',
      // left: '0px',
      // width: '200px',
      background: 'pink'
    }
    return (
    <div style={nav} className="col-md-3">
    <Item title="首页" href="#" />
    <ItemHead title="交流平台" />
    <Item title="最新消息" href={FlowRouter.path('newmessage')} />
    <Item title="公共留言" href="#" />
    <Item title="内部消息" href="#" />
    <ItemHead title="成绩查询" />
    <Item title="课程" href={FlowRouter.path('showcoursescore')} />
    <Item title="活动" href={FlowRouter.path('showactivityscore')} />
    <Item title="讲座" href={FlowRouter.path('showlecturescore')} />
    <ItemHead title="成绩添加" />
    <Item title="添加课程成绩" href={FlowRouter.path('addcoursescore')} />
    <Item title="添加活动成绩" href={FlowRouter.path('addactivityscore')} />
    <Item title="添加讲座成绩" href={FlowRouter.path('addlecturescore')} />
    <ItemHead title="查询入口" />
    <Item title="课程" href={FlowRouter.path('/showcourse')} />
    <Item title="教师" href={FlowRouter.path('/showteacher')} />
    <Item title="班级" href={FlowRouter.path('/showtheclass')} />
    <Item title="学员" href={FlowRouter.path('/showstudent')} />
    <Item title="培养计划" href={FlowRouter.path('/showtrainngplan')} />
    <Item title="课程表" href={FlowRouter.path('/showshedule')} />
    <Item title="管理员" href={FlowRouter.path('/showmanager')} />
    <Item title="活动" href={FlowRouter.path('/showactivity')} />
    <Item title="讲座" href={FlowRouter.path('/showlecture')} />
    <ItemHead title="添加入口" />
    <Item title="报考" href="#" />
    <Item title="添加课程" href={FlowRouter.path('/addcourse')} />
    <Item title="添加教师" href={FlowRouter.path('/addteacher')} />
    <Item title="添加班级" href={FlowRouter.path('/addclass')} />
    <Item title="添加学员" href={FlowRouter.path('/addstudent')} />
    <Item title="添加培养计划" href={FlowRouter.path('/addtrainngplan')} />
    <Item title="添加课程表" href={FlowRouter.path('/addshedule')} />
    <Item title="添加管理员" href={FlowRouter.path('/addmanager')} />
    <Item title="添加活动" href={FlowRouter.path('/addactivity')} />
    <Item title="添加讲座" href={FlowRouter.path('/addlecture')} />
</div>
    )
  }
})
