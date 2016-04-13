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