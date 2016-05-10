ShowManager = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe("users");
    let manager = Meteor.users.find({roles: 'manager'}).fetch()
    return {
      manager:sub.ready() ? manager : null,
      ready: sub.ready(),
    }
  },

  rendermanager() {
    return this.data.manager.map(function(a,n){
      return <ManagerItem manager={a} key={n} />
    })
  },

  render() {
    if (!this.data.ready) return null
    return (
      <div>
        <div className="col-md-9">
            <div className="col-md-2">用户名</div>
            <div className="col-md-2">角色</div>
        </div>
        {this.rendermanager()}
      </div>
    )
  }
})
