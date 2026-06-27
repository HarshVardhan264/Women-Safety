const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true }, // Incident Title
    description: { type: String, required: true },
    location: {
      address: { type: String, trim: true },
      lat: { type: Number },
      lng: { type: Number },
    },
    incidentDateTime: { type: Date, required: true },
    isAnonymous: { type: Boolean, default: true },
    filedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

    // Task 2.2 - Evidence Upload (files themselves live in Cloudinary;
    // only the resulting URL/reference is stored here)
    evidence: [
      {
        type: { type: String, enum: ['image', 'video', 'audio'] },
        url: { type: String },
        publicId: { type: String },
      },
    ],

    // Task 2.3 - AI Complaint Analyzer output
    aiAnalysis: {
      incidentType: { type: String },
      severity: { type: String, enum: ['Low', 'Medium', 'High', 'Critical'] },
      summary: { type: String },
      suggestedCategory: { type: String },
    },

    // Task 2.4 - Complaint Draft Generator output
    complaintDraft: { type: String },

    status: {
      type: String,
      enum: ['Pending', 'Under Review', 'Resolved', 'Rejected'],
      default: 'Pending',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Complaint', complaintSchema);
