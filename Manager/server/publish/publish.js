Meteor.publish('course', function() {
  return Course.find({});
})
