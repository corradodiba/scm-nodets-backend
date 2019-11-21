import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const marksSchema = new Schema({
  student: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Student"
  },
  subject: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Subject"
  },
  teacher: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Teacher"
  }
});

marksSchema.plugin(uniqueValidator);

export const MarksModel = mongoose.model("Marks", marksSchema);
