Meteor.startup(function () {
  if (!Meteor.userId() || !Meteor.loggingIn()) {
    FlowRouter.go('/login')
  }
})
