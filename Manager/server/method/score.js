Meteor.methods({
  addScore2: function(studentId,courseName, courseId, score) {
    let state
    let status
    let trainingPlan = {}
    state = score >= 60 ? "已修" : "未修"
    status = score >= 60 ? "不可选" : "可选"
    let key = `trainingPlan.${courseId}`
    console.log("111",key);
    let $set = {}
    $set[key] = {
      courseName: courseName,
      state: state,
      status: status,
      score: score
    }
    console.log("message",$set);
    Score.update({studentId: studentId}, {$set: $set})
  }
})
