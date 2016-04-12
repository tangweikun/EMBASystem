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

FlowRouter.route('/login', {
  action: function() {
    ReactLayout.render(Login)
  }
});

FlowRouter.route('/schedule', {
  action: function() {
    ReactLayout.render(ShowSchedule)
  }
});
