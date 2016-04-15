Meteor.methods({
  addStudent: function(studentId, studentName, gender, IDNumber, nation, politicalLandscape, company, position, postalAdress, postcode, admissionDate, theClass, category, area, annual) {

    let userData = {
      username: studentId,
      password: '111111',
      // profile: {roles: 'manager'},
    }
    Accounts.createUser(userData);
    let query = {}
    let queryField = 'username'
    query[queryField] = studentId
    let roles = 'student'
    let state = "在校"
    let updateData = {
      profile: {
        studentId: studentId,
        studentName: studentName,
        gender: gender,
        IDNumber: IDNumber,
        nation: nation,
        politicalLandscape: politicalLandscape,
        company: company,
        position: position,
        postalAdress: postalAdress,
        postcode: postcode,
        admissionDate: admissionDate,
        theClass: theClass,
        category: category,
        area: area,
        annual: annual,
      },
      state: state,
      roles: roles,
    }
    Meteor.users.update(query, {$set: updateData}, {upsert: true})
  },

  addScore: function( studentId, theClass, studentName, annual) {
    let tp = TrainingPlan.find({annual: annual}).fetch()
    let courseList = []
    let all = []
    let key
    let trainingPlan = {}
    for (let i = 0; i < tp.length; i++) {
      let details = tp[i]
      let courseId = tp[i].courseId
      let courseInfo = {
        courseName: '',
        state: "未修",
        status: "不可选",
        courseId: courseId,
        details: details,
      }
      courseInfo.courseName = tp[i].courseName
      key = tp[i].courseId
      trainingPlan[key] = courseInfo
    }
    Score.insert({
      studentId: studentId,
      className: theClass,
      studentName: studentName,
      trainingPlan: trainingPlan
    })
  }
});
