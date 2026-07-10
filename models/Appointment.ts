import mongoose, { Schema } from "mongoose";

const AppointmentSchema = new Schema(
  {
    name: String,

    email: String,

    phone: String,

    preferredDate: String,

    message: String,

    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);
