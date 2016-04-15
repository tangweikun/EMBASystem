FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(Layout, {content: <Home />})
  }
});

FlowRouter.notFound = {
  action: function() {
    ReactLayout.render(NotFound)
  }
};

FlowRouter.route('/addcourse', {
  action: function() {
    ReactLayout.render(AddCourse)
  }
});

FlowRouter.route('/showcourse', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowCourse />})
  }
});

FlowRouter.route('/addtrainingplan', {
  action: function() {
    ReactLayout.render(AddTrainingPlan)
  }
});

FlowRouter.route('/showtrainingplan', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowTrainingPlan />})
  }
});

FlowRouter.route('/addteacher', {
  action: function() {
    ReactLayout.render(AddTeacher)
  }
});

FlowRouter.route('/showteacher', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowTeacher />})
  }
});

FlowRouter.route('/addclass', {
  action: function() {
    ReactLayout.render(AddTheClass)
  }
});

FlowRouter.route('/addschedule', {
  action: function() {
    ReactLayout.render(AddSchedule)
  }
});

FlowRouter.route('/showschedule', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowSchedule />})
  }
});

FlowRouter.route('/addstudent', {
  action: function() {
    ReactLayout.render(AddStudent)
  }
});

FlowRouter.route('/showstudent', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowStudent />})
  }
});

FlowRouter.route('/addmanager', {
  action: function() {
    ReactLayout.render(AddManager)
  }
});

FlowRouter.route('/showmanager', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowManager />})
  }
});

FlowRouter.route('/addscore', {
  action: function() {
    ReactLayout.render(AddScore)
  }
});

FlowRouter.route('/showscore', {
  action: function() {
    ReactLayout.render(ShowScore)
  }
});

FlowRouter.route('/showcommit', {
  action: function() {
    ReactLayout.render(ShowCommit)
  }
});
