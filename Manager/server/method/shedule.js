Meteor.methods({
  addShedule: function(sheduleId, when, courseName, teacherName, teacherOrganization, className, where) {
    Shedule.insert({
      sheduleId: sheduleId,
      when: when,
      courseName: courseName,
      teacherName: teacherName,
      teacherOrganization: teacherOrganization,
      className: className,
      where: where
    })
  }
});
