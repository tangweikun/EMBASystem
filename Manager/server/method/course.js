Meteor.methods({
  addCourse: function(courseId, courseName, category, credit, period) {
    Course.insert({
      courseId: courseId,
      courseName: courseName,
      category: category,
      credit: credit,
      period: period
    })
  }
})
