export = {
  fiscalCode: {
    type: String,
    required: true,
    unique: true,
    maxlength: 16,
    minlength: 16
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  }
};
