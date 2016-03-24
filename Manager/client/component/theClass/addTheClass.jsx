AddTheClass = React.createClass({

  onSubmit(e) {
    e.preventDefault();
    let classId = ReactDOM.findDOMNode(this.refs.classId).value.trim(), className = ReactDOM.findDOMNode(this.refs.className).value.trim();
    Meteor.call('addTheClass', classId, className);
    ReactDOM.findDOMNode(this.refs.classId).value = ''; ReactDOM.findDOMNode(this.refs.className).value = '';
  },

  render() {
    return (
      <form className="" ref="form" onSubmit={this.onSubmit}>
        <div className="container">
        <div className="row">
        <div className="col-md-4">
          <label>班级编号</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="classId" />
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>班级名称</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="className" />
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
