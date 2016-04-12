AddTheClass = React.createClass({

  onSubmit(e) {
    e.preventDefault();
    let classId = ReactDOM.findDOMNode(this.refs.classId).value.trim()
    let className = ReactDOM.findDOMNode(this.refs.className).value.trim()
    let diretor = ReactDOM.findDOMNode(this.refs.diretor).value.trim()
    let date = ReactDOM.findDOMNode(this.refs.date).value.trim()
    let annual = ReactDOM.findDOMNode(this.refs.annual).value.trim()
    Meteor.call('addTheClass', classId, className, diretor, date, annual);
    ReactDOM.findDOMNode(this.refs.classId).value = ''; ReactDOM.findDOMNode(this.refs.className).value = '';
    ReactDOM.findDOMNode(this.refs.diretor).value = ''; ReactDOM.findDOMNode(this.refs.date).value = '';      ReactDOM.findDOMNode(this.refs.annual).value = '';
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
        <div className="row">
        <div className="col-md-4">
          <label>班主管</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="diretor" />
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>建班时间</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="date" />
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>年份</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="annual" />
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
