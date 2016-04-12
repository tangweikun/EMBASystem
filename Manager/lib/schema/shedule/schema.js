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
    type: Object,
    optional: true
  },
  where: {
    type: String
  },
  semester: {
    type: String
  },
  studentList: {
    type: Object,
    optional: true
  },
  contact: {
    type: Object,
    optional: true
  }
});
Schedule = new Mongo.Collection('schedule');
Schedule.attachSchema(Schemas.Schedule);
