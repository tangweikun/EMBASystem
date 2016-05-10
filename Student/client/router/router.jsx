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
    ReactLayout.render(Layout, {content: <ShowSchedule />})
  }
});

FlowRouter.route('/trainingplan', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowTrainingPlan />})
  }
});

FlowRouter.route('/score', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowScore />})
  }
});

FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(Layout, {content: <HomePage />})
  }
});

FlowRouter.route('/train', {
  action: function() {
    ReactLayout.render(Layout, {content: <Training />})
  }
});

FlowRouter.route('/commit', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowCommit />})
  }
});

FlowRouter.route('/lecture', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowLecture />})
  }
});

FlowRouter.route('/activity', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowActivity />})
  }
});
