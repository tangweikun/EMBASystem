ShowTeacher = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.subscribe('teacher');
    let teacher = Teacher.find({}).fetch(); 
    return {
      teacher: teacher
    }
  },

  renderTeacher() {
    return this.data.teacher ? this.data.teacher.map(function(a,n){
      return <TeacherItem teacher={a} key={n} />
    }) : null
  },

  render() {
    return (
      <div>
        {this.renderTeacher()}
      </div>
    )
  }
})
