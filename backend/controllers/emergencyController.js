const Emergency = require('../models/Emergency');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');
const { classifyEmergencyRisk } = require('../services/aiService');

// POST /api/emergency — the SOS button flow (Tasks 3.1-3.4)
const triggerSOS = asyncHandler(async (req, res) => {
  const { lat, lng, message } = req.body;

  if (lat === undefined || lng === undefined) {
    throw new ApiError(400, 'lat and lng are required');
  }

  const riskLevel = await classifyEmergencyRisk(message);

  const emergency = await Emergency.create({
    reportedBy: req.user?._id,
    message,
    location: { lat, lng },
    riskLevel,
    // Demo flags for Task 3.5 — flip to real logic once notifications exist
    authoritiesNotified: true,
    contactsNotified: true,
  });

  res.status(201).json({ success: true, data: emergency });
});

// GET /api/emergency  (Task 4.5 - Live Emergency Feed)
const getEmergencies = asyncHandler(async (req, res) => {
  const emergencies = await Emergency.find().sort({ createdAt: -1 }).limit(50);
  res.json({ success: true, count: emergencies.length, data: emergencies });
});

// GET /api/emergency/:id
const getEmergencyById = asyncHandler(async (req, res) => {
  const emergency = await Emergency.findById(req.params.id);
  if (!emergency) throw new ApiError(404, 'Emergency record not found');
  res.json({ success: true, data: emergency });
});

module.exports = { triggerSOS, getEmergencies, getEmergencyById };
