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
    return (
      <div>
        {this.rendercourse()}
      </div>
    )
  }
})
