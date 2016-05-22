ShowCommit = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    let sub = Meteor.subscribe('commit');
    if (sub.ready()) {
      commit = Commit.find({state: '申请中'}).fetch()
      console.log("----,,,",commit);
    }
    return {
      commit:sub.ready() ? commit : null,
      ready: sub.ready(),
    }
  },

  rendercourse() {
    return this.data.commit.map(function(a,n){
      return <CommitItem commit={a} key={n} />
    })
  },

  render() {
    if (!this.data.ready) return null
    const {AppBar} = MUI
    return (
      <div>
        <div style={{fontSize: '22px', marginBottom: '30px'}}>
          <AppBar
            title='选课申请'
            showMenuIconButton={false}
            style={{width: '620px'}}
            />
        </div>
        {this.rendercourse()}
      </div>
    )
  }
})
