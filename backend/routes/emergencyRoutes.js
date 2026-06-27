const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const { triggerSOS, getEmergencies, getEmergencyById } = require('../controllers/emergencyController');

// SOS has to work without forcing a login mid-emergency
router.post('/', triggerSOS);

router.get('/', protect, authorize('admin'), getEmergencies);
router.get('/:id', protect, authorize('admin'), getEmergencyById);

module.exports = router;
