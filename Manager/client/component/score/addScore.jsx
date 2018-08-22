AddScore = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const month = Number(moment().format('MM')) //获取当前月份
    let year = Number(moment().format('YYYY')) //获取当前年份
    let season
    let semester
    if (month > 0 && month < 2) {
      season = '秋'
      year = year - 1
      semester = year + season
    }
    if (month > 1 && month < 8) {
      season = '春'
      semester = year + season
    }
    if (month > 8) {
      season = '秋'
      semester = year + season
    }
    let sub1 = Meteor.subscribe('score')
    let sub2 = Meteor.subscribe('schedule')
    let score = Score.find({}).fetch()
    let schedule = Schedule.find({}).fetch()
    let oneSchedule = Schedule.findOne({
      courseName: this.props.courseName,
      semester: semester,
    })
    return {
      score: sub1.ready() ? score : null,
      schedule: sub2.ready() ? schedule : null,
      oneSchedule: sub2.ready() ? oneSchedule : null,
      ready: sub1.ready() && sub2.ready(),
    }
  },

  renderScore() {
    Array.prototype.deleteEle = function() {
      var o = {},
        newArr = [],
        i,
        j
      for (i = 0; i < this.length; i++) {
        if (typeof o[this[i]] == 'undefined') {
          o[this[i]] = ''
        }
      }
      for (j in o) {
        newArr.push(j)
      }
      return newArr
    }
    let oneSchedule
    let studentList
    let details
    let groupNum
    let all = []
    let courseName
    let courseId
    if (this.data.oneSchedule) {
      oneSchedule = this.data.oneSchedule
      courseId = oneSchedule.courseId
      courseName = oneSchedule.courseName
      console.log('////---', oneSchedule, courseName)
    }

    details = oneSchedule ? oneSchedule.details : ''
    groupNum = details.length
    for (let i = 0; i < groupNum; i++) {
      all = [...all, ...details[i].studentList]
    }
    let list = all.deleteEle()

    console.log('>>>>>>>', list)

    return list.length > 0
      ? list.map(function(a, n) {
          return (
            <ScoreItem
              courseId={courseId}
              key={n}
              studentId={a}
              courseName={courseName}
            />
          )
        })
      : null
  },

  render() {
    if (!this.data.ready) return null
    return <div style={{ marginLeft: '50px' }}>{this.renderScore()}</div>
  },
})
