Meteor.methods({
  AddLecture: function(topic, where, date, time) {
    Lecture.insert({
      topic: topic,
      where: where,
      date: date,
      time: time,
    })
  }
});
