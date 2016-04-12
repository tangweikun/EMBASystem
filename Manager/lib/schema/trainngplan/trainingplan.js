let Schemas = {};
Schemas.TrainingPlan = new SimpleSchema({
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
  },
  evaluationMode: {
    type: String
  },
  annual: {
    type: String
  }
});
TrainingPlan = new Mongo.Collection('trainingPlan');
TrainingPlan.attachSchema(Schemas.TrainingPlan);
