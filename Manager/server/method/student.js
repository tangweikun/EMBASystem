Meteor.methods({
  addStudent: function(studentId, studentName, gender, IDNumber, nation, politicalLandscape, company, position, postalAdress, postcode, admissionDate, theClass, category, area) {

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
    let updateData = {
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
      roles: roles,
    }
    Meteor.users.update(query, {$set: updateData}, {upsert: true})
  }
});
