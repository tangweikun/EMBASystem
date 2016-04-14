AddStudent = React.createClass({

  onSubmit(e) {
    e.preventDefault();
    let self = this, studentId = ReactDOM.findDOMNode(this.refs.studentId).value.trim(), studentName = ReactDOM.findDOMNode(this.refs.studentName).value.trim(), gender = ReactDOM.findDOMNode(this.refs.gender).value.trim(), IDNumber = ReactDOM.findDOMNode(this.refs.IDNumber).value.trim(), nation = ReactDOM.findDOMNode(this.refs.nation).value.trim();
    politicalLandscape = ReactDOM.findDOMNode(this.refs.politicalLandscape).value.trim();
    company = ReactDOM.findDOMNode(this.refs.company).value.trim();
    position = ReactDOM.findDOMNode(this.refs.position).value.trim();
    postalAdress = ReactDOM.findDOMNode(this.refs.postalAdress).value.trim();
    postcode = ReactDOM.findDOMNode(this.refs.postcode).value.trim();
    admissionDate = ReactDOM.findDOMNode(this.refs.admissionDate).value.trim();
    theClass = ReactDOM.findDOMNode(this.refs.theClass).value.trim();
    category = ReactDOM.findDOMNode(this.refs.category).value.trim();
    area = ReactDOM.findDOMNode(this.refs.area).value.trim();
    annual = ReactDOM.findDOMNode(this.refs.annual).value.trim();

    Meteor.call('addStudent', studentId, studentName, gender, IDNumber, nation, politicalLandscape, company, position, postalAdress, postcode, admissionDate, theClass, category, area, annual);
    Meteor.call('addScore', studentId, theClass, studentName, annual)

    ReactDOM.findDOMNode(this.refs.studentId).value = ''; ReactDOM.findDOMNode(this.refs.studentName).value = ''; ReactDOM.findDOMNode(this.refs.gender).value = ''; ReactDOM.findDOMNode(this.refs.IDNumber).value = ''; ReactDOM.findDOMNode(this.refs.nation).value = '';
    ReactDOM.findDOMNode(this.refs.politicalLandscape).value = ''; ReactDOM.findDOMNode(this.refs.company).value = ''; ReactDOM.findDOMNode(this.refs.position).value = ''; ReactDOM.findDOMNode(this.refs.postalAdress).value = ''; ReactDOM.findDOMNode(this.refs.postcode).value = '';
    ReactDOM.findDOMNode(this.refs.admissionDate).value = ''; ReactDOM.findDOMNode(this.refs.theClass).value = ''; ReactDOM.findDOMNode(this.refs.category).value = '';
    ReactDOM.findDOMNode(this.refs.area).value = '';
    ReactDOM.findDOMNode(this.refs.annual).value = '';
  },

  render() {
    return (
      <form className="" ref="form" onSubmit={this.onSubmit}>
        <div className="container">
        <div className="row">
        <div className="col-md-4">
          <label>学号</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="studentId" placeholder="studentId"/>
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>姓名</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="studentName" placeholder="studentName"/>
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>性别</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="gender" placeholder="gender"/>
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>身份证号</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="IDNumber" placeholder="IDNumber"/>
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>民族</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="nation" placeholder="nation"/>
        </div>
        </div>

        <div className="row">
        <div className="col-md-4">
          <label>政治面貌</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="politicalLandscape" placeholder="politicalLandscape"/>
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>公司</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="company" placeholder="company"/>
        </div>
        </div>

        <div className="row">
        <div className="col-md-4">
          <label>职务</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="position" placeholder="position"/>
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>通讯地址</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="postalAdress" placeholder="postalAdress"/>
        </div>
        </div>

        <div className="row">
        <div className="col-md-4">
          <label>邮政编码</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="postcode" placeholder="postcode"/>
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>录取时间</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="admissionDate" placeholder="admissionDate"/>
        </div>
        </div>

        <div className="row">
        <div className="col-md-4">
          <label>班级</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="theClass" placeholder="theClass"/>
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>类别</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="category" placeholder="category"/>
        </div>
        </div>
        <div className="row">
        <div className="col-md-4">
          <label>所在区域</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="area" placeholder="area"/>
        </div>
        </div>

        <div className="row">
        <div className="col-md-4">
          <label>届数</label>
        </div>
        <div className="col-md-4">
          <input type="text" ref="annual" placeholder="annual"/>
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
