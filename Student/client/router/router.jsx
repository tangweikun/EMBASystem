// FlowRouter.route('/', {
//   action: function() {
//     ReactLayout.render(Layout, {content: <Home />})
//   }
// });

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

FlowRouter.route('/trainingplan', {
  action: function() {
    ReactLayout.render(ShowTrainingPlan)
  }
});

FlowRouter.route('/score', {
  action: function() {
    ReactLayout.render(ShowScore)
  }
});

FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(HomePage)
  }
});
