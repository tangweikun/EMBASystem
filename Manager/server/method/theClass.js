Meteor.methods({
  addTheClass: function(classId, className, diretor, date, annual) {
    let state = '在校'
    TheClass.insert({
      classId: classId,
      className: className,
      diretor: diretor,
      date: date,
      annual: annual,
      state: state,
    })
  }
});
