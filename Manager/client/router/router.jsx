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

FlowRouter.route('/addtrainngplan', {
  action: function() {
    ReactLayout.render(AddTrainngPlan)
  }
});

FlowRouter.route('/showtrainngplan', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowTrainngPlan />})
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

FlowRouter.route('/addshedule', {
  action: function() {
    ReactLayout.render(AddShedule)
  }
});

FlowRouter.route('/showshedule', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowShedule />})
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
