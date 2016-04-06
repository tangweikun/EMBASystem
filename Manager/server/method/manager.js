Meteor.methods({
  addManager: function(username, password) {
    let userData = {
      username: username,
      password: password,
      role: 'manager',
    }
    Accounts.createUser(userData)
  }
})
