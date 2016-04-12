Meteor.methods({
  addSchedule: function(scheduleId, when, courseName, teacherName, teacherOrganization, className, where) {
    Schedule.insert({
      scheduleId: scheduleId,
      when: when,
      courseName: courseName,
      teacherName: teacherName,
      teacherOrganization: teacherOrganization,
      className: className,
      where: where
    })
  }
});
