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
    ReactLayout.render(Layout, {content: <ShowTrainingPlan />})
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
