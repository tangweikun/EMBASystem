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
  addSchedule: function(scheduleId, when, courseName, teacherName, teacherOrganization, className, where, semester) {
  let students = Meteor.users.find({"profile.theClass" : className}).fetch()
  let count = Meteor.users.find({"profile.theClass" : className}).count()
  let studentId = []
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      studentId.push(students[i].profile.studentId)
    }
  }
  let details = {
    courseName: courseName,
    when: when,
    where: where,
    teacherName: teacherName,
    className: className,
    teacherOrganization: teacherOrganization,
    semester: semester
  }
  let studentList = {
    studentId: studentId,
  }
  // Schedule.update({scheduleId: scheduleId, courseName: courseName, semester: semester }, {upsert: true})
  Schedule.update({scheduleId: scheduleId},{ $push: { details: details }}, {upsert: true})
  Schedule.update({scheduleId: scheduleId},{ $push: { studentList: studentList }}, {upsert: true})
  }
});
