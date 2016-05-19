Meteor.methods({
  addTrainingPlan: function(courseId, courseName, category, credit, period, evaluationMode, annual) {
    TrainingPlan.update(
      { courseId: courseId, courseName: courseName,annual: annual },
      { $set:
          { category: category,
            credit: credit,
            period: period,
            evaluationMode: evaluationMode,
          }
      },{upsert: true}
    )
  }
  })

  // addTrainingPlan: function(courseId, courseName, category, credit, period, evaluationMode, annual) {
  //   TrainingPlan.insert({
  //     courseId: courseId,
  //     courseName: courseName,
  //     category: category,
  //     credit: credit,
  //     period: period,
  //     evaluationMode: evaluationMode,
  //     annual: annual
  //   })
  // }
