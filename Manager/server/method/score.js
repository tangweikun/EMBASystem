Meteor.methods({
  addScore2: function(studentId,courseName, courseId, score) {
    let state
    let status
    let trainingPlan = {}
    state = score >= 60 ? "已修" : "未修"
    status = score >= 60 ? "不可选" : "可选"
    let key = `trainingPlan.${courseId}`
    let details = TrainingPlan.findOne({courseId: courseId})
    // let details = TrainingPlan.findOne({studentId: studentId}).trainingPlan[`${courseId}`]
    // console.log("<<SSS","MM",score2.trainingPlan[`${courseId}`]);

    // let details = score2[`${key}`].details
    // console.log('>>>>><<<<',details);

    console.log("111",key);
    let $set = {}
    $set[key] = {
      courseName: courseName,
      state: state,
      status: status,
      score: score,
      details: details,
    }
    console.log("message",$set);
    Score.update({studentId: studentId}, {$set: $set})
  },
//需要用addScore22代替addScore2
  addScore22: function(studentId,courseName, courseId, score) {
    let state
    let status
    let trainingPlan = {}
    state = score >= 60 ? "已修" : "未修"
    status = score >= 60 ? "不可选" : "可选"
    let key = `trainingPlan.${courseId}.score`
    console.log("111",key);
    let $set = {}
    $set[key] = score
    console.log("message",$set);
    Score.update({studentId: studentId}, {$set: $set})
  },

  addScore222: function(studentId,courseName, courseId, score) {
    let state
    let status
    let trainingPlan = {}
    state = score >= 60 ? "已修" : "未修"
    status = score >= 60 ? "不可选" : "可选"
    let key = `trainingPlan.${courseId}.score`
    console.log("111",key);
    let $set = {}
    $set[key] = score
    console.log("message",$set);
    Score.update({}, {$set: $set},{multi: true})
  },

})
