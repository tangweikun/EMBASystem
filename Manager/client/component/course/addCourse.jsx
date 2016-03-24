AddCourse = React.createClass({

  onSubmit(e) {
    e.preventDefault();
    let courseId = ReactDOM.findDOMNode(this.refs.courseId).value.trim(), courseName = ReactDOM.findDOMNode(this.refs.courseName).value.trim(),
    category = ReactDOM.findDOMNode(this.refs.category).value.trim(),
    credit = ReactDOM.findDOMNode(this.refs.credit).value.trim(),
    period = ReactDOM.findDOMNode(this.refs.period).value.trim();
    Meteor.call('addCourse', courseId, courseName, category, credit, period);
    ReactDOM.findDOMNode(this.refs.courseId).value = ''; ReactDOM.findDOMNode(this.refs.courseName).value = '';
    ReactDOM.findDOMNode(this.refs.category).value = '';
    ReactDOM.findDOMNode(this.refs.credit).value = ''; ReactDOM.findDOMNode(this.refs.period).value = '';
  },

  render() {
    return (
      <form className="" ref="form" onSubmit={this.onSubmit}>
        <div className="container">
        <div className="row">
        <div className="col-md-4">
          <label>课程编号</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="courseId" />
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>课程名称</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="courseName" />
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>类别</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="category" />
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>学分</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="credit" />
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>学时</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="period" />
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
