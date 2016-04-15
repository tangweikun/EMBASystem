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
  addSchedule: function(scheduleId, when, courseName, teacherName, teacherOrganization, className, where, semester, courseId) {
  let students = Meteor.users.find({"profile.theClass" : className}).fetch()
  let count = Meteor.users.find({"profile.theClass" : className}).count()
  let studentId = []
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      studentId.push(students[i].profile.studentId)
      // let stu = {
      //   studentId: students[i].profile.studentId,
      //   studentName: students[i].profile.studentName,
      //   className: students[i].profile.theClass,
      // }
      // studentId.push(stu)
    }
  }
  let details = {
    courseName: courseName,
    when: when,
    where: where,
    teacherName: teacherName,
    className: className,
    teacherOrganization: teacherOrganization,
    semester: semester,
    studentList: studentId
  }
  let studentList = {
    studentId: studentId,
  }
  // Schedule.update({scheduleId: scheduleId, courseName: courseName, semester: semester }, {upsert: true})

  Schedule.update({scheduleId: scheduleId, courseName: courseName, courseId: courseId, semester: semester},{ $push: { details: details }}, {upsert: true})
  // Schedule.update({scheduleId: scheduleId},{ $push: { studentList: studentId }}, {upsert: true})
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
  },

  show: function() {
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
    let oneSchedule
    let studentList
    let groupNum
    let all = []
    oneSchedule = Schedule.findOne({scheduleId: '004'})
    studentList = oneSchedule.studentList
    groupNum = studentList.length
    for (let i = 0; i < groupNum; i++) {
      all = [...all, ...studentList[i]]
    }
    let list = all.deleteEle()
    console.log(">>>>>>>",list);

  },


//每次在课程表中（schedule）添加一个课程时，调用changeState方法改变该班级里的每个state为“未修”的学生的state为“学习中”，status为“不可选”
  changeState: function(courseName, className, courseId) {
    let state
    let status
    let trainingPlan = {}
    let query = {}
    let key1 = `trainingPlan.${courseId}.state`
    let key2 = `trainingPlan.${courseId}.status`
    console.log("111",key1,key2);
     query[key1] = '未修'
     query.className = className
    let $set = {}
    $set[key1] = '学习中'
    $set[key2] = '不可选'
    console.log("message",$set);
    console.log("----", query);
    // let tt = Score.find()
    Score.update( query, {$set: $set},{multi: true})
  },


//每次在课程表中（schedule）添加一个课程时，调用changeState方法改变其他在校班级里的每个state为“未修”的学生的status为“可选”
  changeState2: function(courseName, className, courseId) {
    let state
    let status
    let trainingPlan = {}
    let query = {}
    let key1 = `trainingPlan.${courseId}.state`
    let key2 = `trainingPlan.${courseId}.status`
    console.log("111",key1,key2);
     query[key1] = '未修'
     let neClassName = {}
     neClassName.$ne = className
     query.className = neClassName

    let $set = {}
    $set[key2] = '可选'
    console.log("message",$set);
    console.log("----", query);
    Score.update( query, {$set: $set},{multi: true})
  }

});
