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

  addScore: function( studentId, theClass ) {
    let tp = TrainingPlan.find({}).fetch()
    let courseList = []
    let all = []
    for (let i =0; i < tp.length; i ++) {
      let trainingPlan = {
        courseName: '',
        state: "未修",
        status: "不可选",
      }
      courseList.push(tp[i].courseName)
      trainingPlan.courseName = courseList[i]
      all.push(trainingPlan)
    }

    Score.insert({
      studentId: studentId,
      className: theClass,
      trainingPlan: all
    })
  }

});
