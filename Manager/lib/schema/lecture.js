let Schemas = {};
Schemas.Lecture = new SimpleSchema({
  topic: {
    type: String
  },
  where: {
    type: String
  },
  date: {
    type: String
  },
  time: {
    type: String
  },
})
Lecture = new Mongo.Collection('lecture');
Lecture.attachSchema(Schemas.Lecture);
