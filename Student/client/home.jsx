Home = React.createClass({
  render() {
          var {AppBar} = MUI
    let home = {
      // marginLeft: '200px',
      background: 'blue'
    }
    return (

      <div style={home} className="col-md-9">
        <AppBar title="izziLab"/>
        <div className="col-md-4">耿立校老师，您好！       欢迎使用本系统！为保障你的帐号安全，请随时点击右上角修改密码。当你的个人信息有变动的时候，请随时点击右上角修改个人资料。</div>
        <div className="col-md-4">请随时关注最新消息，以了解EMBA教育中心最新的教学安排。本系统为方便用户之间的交流，设计有内部短信功能和公共留言功能。</div>
        <div className="col-md-4">按照2010年3月制订的河北工业大学高级管理人员工商管理硕士(EMBA)培养方案 ，我校EMBA研究生需修满16门课程、获得36学分，通过学位论文答辩，经河北工业大学学位委员会评定，授予高级管理人员工商管理硕士(EMBA)专业学位，按国家规定颁发专业硕士学位证书。</div>
      </div>
    )
  }
})
