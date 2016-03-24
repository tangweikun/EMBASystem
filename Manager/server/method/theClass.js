Meteor.methods({
  addTheClass: function(classId, className) {
    TheClass.insert({
      classId: classId,
      className: className
    })
  }
});
