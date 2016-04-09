Meteor.methods({
  addTrainngPlan: function(courseId, courseName, category, credit, period) {
    TrainngPlan.insert({
      courseId: courseId,
      courseName: courseName,
      category: category,
      credit: credit,
      period: period
    })
  }
})
