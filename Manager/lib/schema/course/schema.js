let Schemas = {};
Schemas.Course = new SimpleSchema({
  courseId: {
    type: String,
    optional: true
  },
  courseName: {
    type: String
  },
  category: {
    type: String
  },
  credit: {
    type: Number
  },
  period: {
    type: Number
  }
});
Course = new Mongo.Collection('course');
Course.attachSchema(Schemas.Course);
