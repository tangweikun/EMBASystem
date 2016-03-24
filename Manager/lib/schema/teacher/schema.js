let Schemas = {};
Schemas.Teacher = new SimpleSchema({
  teacherId: {
    type: String,
    optional: true
  },
  teacherName: {
    type: String
  },
  category: {
    type: String
  },
  gender: {
    type: String
  },
  degree: {
    type: String,
    optional: true
  },
  course: {
    type: String,
    optional: true
  },
  organization: {
    type: String,
    optional: true
  }
});
Teacher = new Mongo.Collection('teacher');
Teacher.attachSchema(Schemas.Teacher);
