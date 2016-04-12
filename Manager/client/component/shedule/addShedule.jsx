AddSchedule = React.createClass({

  onSubmit(e) {
    e.preventDefault();
    let scheduleId = ReactDOM.findDOMNode(this.refs.scheduleId).value, when = ReactDOM.findDOMNode(this.refs.when).value,
    courseName = ReactDOM.findDOMNode(this.refs.courseName).value,
    teacherName = ReactDOM.findDOMNode(this.refs.teacherName).value,
    teacherOrganization = ReactDOM.findDOMNode(this.refs.teacherOrganization).value,
    className = ReactDOM.findDOMNode(this.refs.className).value,
    where = ReactDOM.findDOMNode(this.refs.where).value;
    Meteor.call('addSchedule', scheduleId, when, courseName, teacherName, teacherOrganization, className, where);
    ReactDOM.findDOMNode(this.refs.scheduleId).value = ''; ReactDOM.findDOMNode(this.refs.when).value = '';
    ReactDOM.findDOMNode(this.refs.courseName).value = '';
    ReactDOM.findDOMNode(this.refs.teacherName).value = '';
    ReactDOM.findDOMNode(this.refs.teacherOrganization).value = '';
    ReactDOM.findDOMNode(this.refs.className).value = '';
    ReactDOM.findDOMNode(this.refs.where).value = '';
  },

  render() {
    return (
      <form className="" ref="form" onSubmit={this.onSubmit}>
        <div className="container">
        <div className="row">
        <div className="col-md-4">
          <label>序号</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="scheduleId" />
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>时间</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="when" />
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>课程</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="courseName" />
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>主讲教师</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="teacherName" />
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>授课教师单位</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="teacherOrganization" />
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>上课班级</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="className" />
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>上课地点</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="where" />
        </div>
        </div>
        <div calssName="row">
          <button type="submit">提交</button>
        </div>
        </div>
      </form>
    )
  }
})
