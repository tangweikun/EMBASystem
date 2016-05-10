let Schemas = {};
Schemas.Activity = new SimpleSchema({
  topic: {
    type: String
  },
  speaker: {
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
Activity = new Mongo.Collection('activity');
Activity.attachSchema(Schemas.Activity);
