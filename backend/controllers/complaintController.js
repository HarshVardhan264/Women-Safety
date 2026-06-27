const Complaint = require('../models/Complaint');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');
const { analyzeComplaint, generateComplaintDraft } = require('../services/aiService');

// POST /api/complaints
// Works for both logged-in and anonymous submissions (Task 2.1).
// Evidence files (Task 2.2) arrive via multer at req.files — actual
// Cloudinary upload is a Day 2 task; this just leaves the slot ready.
const createComplaint = asyncHandler(async (req, res) => {
  const { title, description, incidentDateTime, location, isAnonymous } = req.body;

  if (!title || !description || !incidentDateTime) {
    throw new ApiError(400, 'title, description and incidentDateTime are required');
  }

  const anonymous = isAnonymous === undefined ? true : Boolean(isAnonymous);

  const complaint = await Complaint.create({
    title,
    description,
    incidentDateTime,
    location,
    isAnonymous: anonymous,
    filedBy: anonymous ? undefined : req.user?._id,
  });

  // Tasks 2.3 / 2.4 - AI analysis + auto-generated draft
  complaint.aiAnalysis = await analyzeComplaint(complaint);
  complaint.complaintDraft = await generateComplaintDraft(complaint);
  await complaint.save();

  res.status(201).json({ success: true, data: complaint });
});

// GET /api/complaints  (Task 2.5 - Complaint History / admin dashboard)
const getComplaints = asyncHandler(async (req, res) => {
  const { status } = req.query;
  const filter = status ? { status } : {};
  const complaints = await Complaint.find(filter).sort({ createdAt: -1 });
  res.json({ success: true, count: complaints.length, data: complaints });
});

// GET /api/complaints/:id
const getComplaintById = asyncHandler(async (req, res) => {
  const complaint = await Complaint.findById(req.params.id);
  if (!complaint) throw new ApiError(404, 'Complaint not found');
  res.json({ success: true, data: complaint });
});

// PATCH /api/complaints/:id/status  (admin)
const updateComplaintStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const complaint = await Complaint.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  );
  if (!complaint) throw new ApiError(404, 'Complaint not found');
  res.json({ success: true, data: complaint });
});

module.exports = { createComplaint, getComplaints, getComplaintById, updateComplaintStatus };
