let Schemas = {};
Schemas.Shedule = new SimpleSchema({
  sheduleId: {
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
Shedule = new Mongo.Collection('shedule');
Shedule.attachSchema(Schemas.Shedule);
