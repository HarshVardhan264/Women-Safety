const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { protect, authorize } = require('../middleware/authMiddleware');
const {
  createComplaint,
  getComplaints,
  getComplaintById,
  updateComplaintStatus,
} = require('../controllers/complaintController');

// No `protect` here on purpose — anonymous filing is a core feature (Task 2.1)
router.post('/', upload.array('evidence', 5), createComplaint);

router.get('/', protect, authorize('admin'), getComplaints);
router.get('/:id', protect, getComplaintById);
router.patch('/:id/status', protect, authorize('admin'), updateComplaintStatus);

module.exports = router;
