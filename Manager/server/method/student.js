Meteor.methods({
  addStudent: function(studentId, studentName, gender, IDNumber, nation, politicalLandscape, company, position, postalAdress, postcode, admissionDate, theClass, category, area) {
    Student.insert({
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
      area: area
    })
  }
});
