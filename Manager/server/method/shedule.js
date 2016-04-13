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
      let stu = {
        studentId: students[i].profile.studentId,
        studentName: students[i].profile.studentName,
        className: students[i].profile.theClass,
      }
      studentId.push(stu)
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

  Schedule.update({scheduleId: scheduleId, courseName: courseName},{ $push: { details: details }}, {upsert: true})
  Schedule.update({scheduleId: scheduleId},{ $push: { studentList: studentId }}, {upsert: true})
},

  showStudent: function() {

    Array.prototype.deleteEle = function () {
                var o = {}, newArr = [], i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof (o[this[i]]) == "undefined") {
                        o[this[i]] = "";
                    }
                }
                for (j in o) {
                    newArr.push(j)
                }
                return newArr;
            }

    let count
    let schedule
    let studentList
    let list = []
    let all = []
    let courseNum

    schedule = Schedule.find({}).fetch()
    courseNum = schedule.length
    for (let i = 0; i < courseNum; i++) {
      console.log("scheduleId--->", schedule[i].scheduleId);
      count = ''
      studentList = schedule[i].studentList
      count = studentList.length
      console.log(">>>",count,studentList);
      all[i] = [],list[i] = []
      for (let j =0; j < count; j++) {
        all[i] = [...all[i], ...studentList[j]]
      }
      list[i] = all[i].deleteEle()
      console.log("studentList---->>>>",list);
    }
  }
});
