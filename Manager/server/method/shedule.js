Meteor.methods({
  // addSchedule: function(scheduleId, when, courseName, teacherName, teacherOrganization, className, where) {
  //   Schedule.insert({
  //     scheduleId: scheduleId,
  //     when: when,
  //     courseName: courseName,
  //     teacherName: teacherName,
  //     teacherOrganization: teacherOrganization,
  //     className: className,
  //     where: where,
  //   })
  // }
  addSchedule: function(scheduleId, when, courseName, teacherName, teacherOrganization, className, where) {
    Schedule.update({scheduleId: scheduleId},
    { $set: {
    when: when,
    courseName: courseName,
    teacherName: teacherName,
    teacherOrganization: teacherOrganization,
    where: where,
    semester: semester
    }},{upsert: true}
    )
    Schedule.update({scheduleId: scheduleId}, {$push: {className: className}}, {upsert: true})
  }
});
