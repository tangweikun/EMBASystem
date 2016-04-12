let Schemas = {};
Schemas.Schedule = new SimpleSchema({
  scheduleId: {
    type: String,
    optional: true
  },
  courseName: {
    type: String
  },
  details: {
    type: Object,
    optional: true
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
// Schedule.attachSchema(Schemas.Schedule);
