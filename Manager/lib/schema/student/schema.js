let Schemas = {};
Schemas.Student = new SimpleSchema({
  studentId: {
    type: String,
  },
  studentName: {
    type: String
  },
  gender: {
    type: String
  },
  IDNumber: {
    type: String
  },
  nation: {
    type: String
  },
  politicalLandscape: {
    type: String
  },
  company: {
    type: String
  },
  position: {
    type: String
  },
  postalAdress: {
    type: String
  },
  postcode: {
    type: String
  },
  admissionDate: {
    type: String
  },
  theClass: {
    type: String
  },
  category: {
    type: String
  },
  area: {
    type: String
  }
});
Student = new Mongo.Collection('student');
// Student.attachSchema(Schemas.Student);
