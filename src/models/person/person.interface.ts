import { Document } from "mongoose";

export interface Person extends Document {
  fiscalCode: string;
  name: string;
  surname: string;
  dateOfBirth: Date;
  email?: string;
  password?: string;
}

export const schema = {
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
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
};

export { CreatePersonInput } from "./person.costructor";
