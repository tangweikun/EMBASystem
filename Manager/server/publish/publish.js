Meteor.publish('course', function() {
  return Course.find({});
});

Meteor.publish('teacher', function() {
  return Teacher.find({});
});

Meteor.publish('shedule', function() {
  return Shedule.find({});
});
