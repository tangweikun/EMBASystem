ShowStudent = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe("users");
    let student = Meteor.users.find({roles: 'student'}).fetch()
    return {
      student: sub.ready() ? student : null
    }
  },

  renderstudent() {
    return this.data.student ? this.data.student.map(function(a,n){
      return <StudentItem student={a} key={n} />
    }) : null
  },

  render() {
    return (
      <div>
        <div className="col-md-9">
        <div className="col-md-1">学号</div>
        <div className="col-md-1">姓名</div>
        <div className="col-md-1">性别</div>
        <div className="col-md-1">身份证号</div>
        <div className="col-md-1">民族</div>
        <div className="col-md-1">党派</div>
        <div className="col-md-1">公司</div>
        <div className="col-md-1">职务</div>
        <div className="col-md-1">录取时间</div>
        <div className="col-md-1">班级</div>
        <div className="col-md-1">类别</div>
        <div className="col-md-1">所在区域</div>
        </div>
        {this.renderstudent()}
      </div>
    )
  }
})
