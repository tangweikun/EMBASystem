FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(Layout, {content: <Home />})
  }
});

FlowRouter.notFound = {
  action: function() {
    ReactLayout.render(notFound)
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
