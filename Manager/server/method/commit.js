Meteor.methods({
  approval: function(studentId, courseId, state) {
    Commit.update({studentId: studentId, courseId: courseId},{$set: {state: state}})
  },


//修改schedule
  chanSch: function(studentId,courseId) {
    let schedule = Schedule.findOne({courseId: courseId})
    let className = Meteor.users.findOne({"profile.studentId": studentId}).profile.theClass
    details = schedule.details
    let scheduleIdList = []
    details.map(function(a,n){
      if (scheduleIdList.indexOf(a.scheduleId) == '-1') {
        scheduleIdList.push(a.scheduleId)
        let det = {}
        det.details = a
        det.details.className = className
        det.details.studentList = [studentId]
        Schedule.update({ courseId: courseId},{ $push: det}, {upsert: true})
      }
    })


  }

    })
///schedule表和score标
