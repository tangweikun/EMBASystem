Meteor.methods({
  AddActivity: function(topic, speaker, where, date, time) {
    Activity.insert({
      topic: topic,
      speaker: speaker,
      where: where,
      date: date,
      time: time,
    })
  }
});
