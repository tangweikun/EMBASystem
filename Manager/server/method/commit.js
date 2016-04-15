Meteor.methods({
  approval: function(studentId, courseId, state) {
    Commit.update({studentId: studentId, courseId: courseId},{$set: {state: state}})
  }

    })
///schedule表和score标
