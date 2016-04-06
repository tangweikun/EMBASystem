Meteor.methods({
  addManager: function(username, password) {
    let userData = {
      username: username,
      password: password,
      // profile: {roles: 'manager'},
    }
    Accounts.createUser(userData);
    let query = {}
    queryField = 'username'
    query[queryField] = username
    let roles = 'manager'
    Meteor.users.update(query, {$set: {roles: roles}}, {upsert: true})
  }
})
