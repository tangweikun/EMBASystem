Meteor.publish('course', function() {
  return Course.find({});
});

Meteor.publish('trainngPlan', function() {
  return TrainngPlan.find({});
});

Meteor.publish('teacher', function() {
  return Teacher.find({});
});

Meteor.publish('shedule', function() {
  return Shedule.find({});
});

Meteor.publish('student', function() {
  return Student.find({});
});

Meteor.publish('users', function() {
  return Meteor.users.find({});
});
