export = {
  fiscalCode: {
    type: String,
    require: true,
    unique: true,
    maxlength: 16,
    minlength: 16
  },
  name: {
    type: String,
    require: true
  },
  surname: {
    type: String,
    require: true
  },
  dateOfBirth: {
    type: Date,
    require: true
  }
};
