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
    ReactLayout.render(Layout, {content: <ShowSchedule />, title: '课程表'})
  }
});

FlowRouter.route('/trainingplan', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowTrainingPlan />, title: '培养计划'})
  }
});

FlowRouter.route('/score', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowScore />, title: '成绩'})
  }
});

FlowRouter.route('/', {
  action: function() {
    ReactLayout.render(Layout, {content: <HomePage />, title: '首页'})
  }
});

FlowRouter.route('/train', {
  action: function() {
    ReactLayout.render(Layout, {content: <Training />, title: '培养计划'})
  }
});

FlowRouter.route('/commit', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowCommit />, title: '自主选课'})
  }
});

FlowRouter.route('/lecture', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowLecture />, title: '活动公告'})
  }
});

FlowRouter.route('/activity', {
  action: function() {
    ReactLayout.render(Layout, {content: <ShowActivity />, title: '讲座公告'})
  }
});

FlowRouter.route('/changepassword', {
  action: function() {
    ReactLayout.render(Layout, {content: <ChangePassword />, title: '重置密码'})
  }
});
