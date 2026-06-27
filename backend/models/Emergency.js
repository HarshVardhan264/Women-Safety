const mongoose = require('mongoose');

const emergencySchema = new mongoose.Schema(
  {
    reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: { type: String, trim: true },

    // Task 3.2 - Live Location
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },

    // Task 3.3 - AI Emergency Detection
    riskLevel: {
      type: String,
      enum: ['Normal', 'Medium Risk', 'High Risk', 'Emergency'],
      default: 'Normal',
    },

    status: {
      type: String,
      enum: ['Active', 'Acknowledged', 'Resolved'],
      default: 'Active',
    },

    // Demo-only flags for Task 3.5 / Day 4 WhatsApp integration
    authoritiesNotified: { type: Boolean, default: false },
    contactsNotified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Emergency', emergencySchema);
