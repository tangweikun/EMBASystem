Meteor.methods({
  addTrainingPlan: function(courseId, courseName, category, credit, period) {
    TrainingPlan.insert({
      courseId: courseId,
      courseName: courseName,
      category: category,
      credit: credit,
      period: period
    })
  }
})
