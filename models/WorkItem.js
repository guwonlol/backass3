const mongoose = require("mongoose");

const workItemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "in_progress", "completed"],
      default: "pending"
    },
    priority: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("WorkItem", workItemSchema);
