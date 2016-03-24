let Schemas = {};
Schemas.TheClass = new SimpleSchema({
  classId: {
    type: String,
    optional: true
  },
  className: {
    type: String
  },
  studentList: {
    type: Object,
    optional: true
  }
});
TheClass = new Mongo.Collection('theClass');
TheClass.attachSchema(Schemas.TheClass);
