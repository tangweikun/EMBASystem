AddTeacher = React.createClass({

  handleSubmit(event) {
    event.preventDefault();
    let teacherId = ReactDOM.findDOMNode(this.refs.teacherId).value.trim();
    let teacherName = ReactDOM.findDOMNode(this.refs.teacherName).value.trim();
    let category = ReactDOM.findDOMNode(this.refs.category).value.trim();
    let gender = ReactDOM.findDOMNode(this.refs.gender).value.trim();
    let title = ReactDOM.findDOMNode(this.refs.title).value.trim();
    let degree = ReactDOM.findDOMNode(this.refs.degree).value.trim();
    let course = ReactDOM.findDOMNode(this.refs.course).value.trim();
    let organization = ReactDOM.findDOMNode(this.refs.organization).value.trim();
    Meteor.call('addTeacher', teacherId, teacherName, category, gender, title, degree, course, organization);
    ReactDOM.findDOMNode(this.refs.teacherId).value = ''; ReactDOM.findDOMNode(this.refs.teacherName).value = '';
    ReactDOM.findDOMNode(this.refs.category).value = '';
    ReactDOM.findDOMNode(this.refs.gender).value = ''; ReactDOM.findDOMNode(this.refs.title).value = '';
    ReactDOM.findDOMNode(this.refs.degree).value = ''; ReactDOM.findDOMNode(this.refs.course).value = '';
    ReactDOM.findDOMNode(this.refs.organization).value = '';
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="container">
        <div className="row">
      <div className="col-md-4"><input type="text" ref="teacherId" placeholder="教师编号"/></div>
      <div className="col-md-4"><input type="text" ref="teacherName" placeholder="教师姓名"/></div>
      <div className="col-md-4"><input type="text" ref="category" placeholder="类别"/></div>
      </div>
      <div className="row">
      <div className="col-md-4"><input type="text" ref="gender" placeholder="性别"/></div>
      <div className="col-md-4"><input type="text" ref="title" placeholder="职称"/></div>
      <div className="col-md-4"><input type="text" ref="degree" placeholder="学位"/></div>
      <div className='col-md-4'><input type="text" ref="course" placeholder="课程"/></div>
      </div>
      <div className="row">
      <div className="col-md-4"><input type="text" ref="organization" placeholder="组织"/></div>
      <div className="col-md-4"><input type="submit" /></div>
      </div>
      </div>
    </form>
    )
  }
})
