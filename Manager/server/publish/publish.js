Meteor.publish('course', function() {
  return Course.find({});
});

Meteor.publish('trainingPlan', function() {
  return TrainingPlan.find({});
});

Meteor.publish('teacher', function() {
  return Teacher.find({});
});

Meteor.publish('schedule', function() {
  return Schedule.find({});
});

Meteor.publish('student', function() {
  return Student.find({});
});

Meteor.publish('users', function() {
  return Meteor.users.find({});
});
