let Schemas = {};
Schemas.TrainngPlan = new SimpleSchema({
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
    type: String
  }
});
TrainngPlan = new Mongo.Collection('trainngPlan');
TrainngPlan.attachSchema(Schemas.TrainngPlan);
