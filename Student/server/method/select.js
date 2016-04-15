Meteor.methods({
  select: function() {
    let all = []
    let _id = Meteor.userId()   //1、获取当前用户id
    console.log("_id->",_id);
    let className = Meteor.users.findOne({_id: _id}).profile.className
    let studentId = Meteor.users.findOne({_id: _id}).profile.studentId  //获取用户的studentId
    console.log("studentId->",studentId);
    let score = Score.findOne({studentId: studentId})
    console.log("score->",score);
    let trainingPlan = score.trainingPlan
    console.log("trainingPlan->", trainingPlan);

    function transform(obj) {
      let arr = []
      for (let item in obj) {
        arr.push(obj[item])
      }
      return arr
    }

    let trainingPlan2 = transform(trainingPlan)

    console.log("trainingPlan2->",trainingPlan2)

    trainingPlan2.map(function(a,n){
      if (a.status == '可选') {
        all = [...all, ...a]
      }
    })
    console.log("all->",all);
  },

  commit: function(courseId,courseName) {
    let users = Meteor.users.findOne({_id: Meteor.userId()})
    let studentId = users.profile.studentId
    let studentName = users.profile.studentName
    let theClass = users.profile.theClass
    Commit.insert({
      studentId: studentId,
      studentName: studentName,
      theClass: theClass,
      courseId: courseId,
      courseName: courseName,
      state: '申请中'
    })
  },
})
