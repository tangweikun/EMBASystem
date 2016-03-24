Meteor.methods({
  addTeacher: function(teacherId, teacherName, category, gender, title, degree, course, organization) {

    Teacher.insert({
      teacherId: teacherId,
      teacherName: teacherName,
      category: category,
      gender: gender,
      title: title,
      degree: degree,
      course: course,
      organization: organization
    })
  }
});
