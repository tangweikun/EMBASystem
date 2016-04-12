let Schemas = {};
Schemas.TheClass = new SimpleSchema({
  classId: {
    type: String,
    optional: true
  },
  className: {
    type: String
  },
  annual: {
    type: String
  },
  diretor: {
    type: String,
    optional: true
  },
  date: {
    type: String
  },
  state: {
    type: String
  },
  monitor: {
    type: String,
    optional: true
  },
  studentList: {
    type: Object,
    optional: true
  }
});
TheClass = new Mongo.Collection('theClass');
TheClass.attachSchema(Schemas.TheClass);
