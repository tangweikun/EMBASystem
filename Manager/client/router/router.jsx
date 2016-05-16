//按9月为划分
const month = Number(moment().format('MM'))  //获取当前月份
const year = Number(moment().format('YYYY'))  //获取当前年份
const diff = month > 8 ? 0 : 1
const year1 = year - diff
const year2 = year - diff - 1
console.log(month,year,diff,year1,year2);

FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(Layout, {content: <Home />})
  }
})

FlowRouter.notFound = {
  action: function() {
    ReactLayout.render(Layout, {content: <NotFound />})
  }
}

FlowRouter.route('/addcourse', {
  action: function() {
    ReactLayout.render(Layout, {content: <AddCourse />})
  }
})

FlowRouter.route('/showcourse', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowCourse />})
  }
})

FlowRouter.route('/addtrainingplan', {
  action: function() {
    ReactLayout.render(Layout, {content: <AddTrainingPlan />})
  }
})

FlowRouter.route('/showtrainingplan', {
  action: function() {
    ReactLayout.render(Layout, {content: <QueryTrainngplan />})
  }
})

FlowRouter.route(`/showtrainingplan${year1}`, {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowTrainingPlan annual={year1} />})
  }
})

FlowRouter.route(`/showtrainingplan${year2}`, {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowTrainingPlan annual={year2} />})
  }
})

FlowRouter.route('/addteacher', {
  action: function() {
    ReactLayout.render(Layout, {content: <AddTeacher />})
  }
})

FlowRouter.route('/showteacher', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowTeacher />})
  }
})

FlowRouter.route('/addclass', {
  action: function() {
    ReactLayout.render(Layout, {content: <AddTheClass />})
  }
})

FlowRouter.route('/addschedule', {
  action: function() {
    ReactLayout.render(Layout, {content: <AddSchedule />})
  }
})

FlowRouter.route('/showschedule', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowSchedule />})
  }
})

FlowRouter.route('/addstudent', {
  action: function() {
    ReactLayout.render(Layout, {content: <AddStudent />})
  }
})

FlowRouter.route('/showstudent', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowStudent />})
  }
})

FlowRouter.route('/addmanager', {
  action: function() {
    ReactLayout.render(Layout, {content: <AddManager />})
  }
})

FlowRouter.route('/showmanager', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowManager />})
  }
})

FlowRouter.route('/addscore', {
  action: function() {
    ReactLayout.render(Layout, {content: <TScore />})
  }
})

FlowRouter.route('/showscore', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowScore />})
  }
})

FlowRouter.route('/showcommit', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowCommit />})
  }
})

FlowRouter.route('/showtheclass', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowClass />})
  }
})

FlowRouter.route('/addlecture', {
  action: function() {
    ReactLayout.render(Layout, {content: <AddLecture />})
  }
})

FlowRouter.route('/showlecture', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowLecture />})
  }
})

FlowRouter.route('/addactivity', {
  action: function() {
    ReactLayout.render(Layout, {content: <AddActivity />})
  }
})

FlowRouter.route('/showactivity', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowActivity />})
  }
})

FlowRouter.route('/login', {
  action: function() {
    ReactLayout.render(Login)
  }
})
