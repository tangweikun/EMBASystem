let Schemas = {};
Schemas.Schedule = new SimpleSchema({
  scheduleId: {
    type: String,
    optional: true
  },
  when: {
    type: String
  },
  courseName: {
    type: String
  },
  teacherName: {
    type: String
  },
  teacherOrganization: {
    type: String
  },
  className: {
    type: String
  },
  where: {
    type: String
  }
});
Schedule = new Mongo.Collection('schedule');
Schedule.attachSchema(Schemas.Schedule);
