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
    <Item title="最新消息" href="#" />
    <Item title="公共留言" href="#" />
    <Item title="内部消息" href="#" />
    <ItemHead title="成绩查询" />
    <Item title="课程" href="#" />
    <Item title="活动" href="#" />
    <Item title="讲座" href="#" />
    <ItemHead title="教学安排查询" />
    <Item title="课程" href="#" />
    <Item title="活动" href={FlowRouter.path('/showactivity')} />
    <Item title="讲座" href="#" />
    <ItemHead title="基础信息" />
    <Item title="课程表" href={FlowRouter.path('/schedule')} />
    <Item title="教师" href={FlowRouter.path('/showteacher')} />
    <Item title="班级" href={FlowRouter.path('/showclass')} />
    <Item title="培养计划" href={FlowRouter.path('/trainingplan')} />
    <Item title="选课" href="#" />
</div>
    )
  }
})
