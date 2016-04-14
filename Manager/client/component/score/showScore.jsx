ShowScore = React.createClass({

  getInitialState() {
    return {
      content: false
    }
  },


  _txtBlur(e) {
    // this.state.content = e.target.value
    this.setState({
      content: e.target.value
    })
    console.log("000",e.target.value,this.state.content);

  },

  renderScore() {
    console.log("message",this.state.content);
    return this.state.content ? <AddScore courseName={this.state.content}/> : <div>222</div>
  },

  render() {
    return (
      <div>
      <div className="col-md-9">
        <div className="col-md-3">输入录入课程名</div>
        <div className="col-md-4"><input type="text" onBlur={this._txtBlur}/></div>
      </div>
      {this.renderScore()}
    </div>
    )
  }
})
