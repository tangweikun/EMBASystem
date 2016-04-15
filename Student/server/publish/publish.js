Meteor.publish('schedule', function() {
  if (this.userId) {
    let className = Meteor.users.findOne({_id: this.userId}, {fields: {theClass: 1}}).theClass
    return Schedule.find({ className: className })
    // let theClass = 'theClass'
    // let className = profile.theClass
    console.log(">>>",className);
  }
  // let className = Meteor.users.find()
  // return Schedule.find({});
});

Meteor.publish('users', function() {
  return Meteor.users.find({});
});

Meteor.publish('score', function() {
  return Score.find({})
})

Meteor.publish('commit', function() {
  return Commit.find({})
})
