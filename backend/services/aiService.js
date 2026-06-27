// Placeholder AI service. Wire these up to your chosen AI provider in
// Day 2 (Task 2.3 Complaint Analyzer, Task 2.4 Draft Generator) and
// Day 3 (Task 3.3 Emergency Detection). Keeping this interface stable
// means the controllers that call it never have to change — only what
// happens inside these functions.

/**
 * Analyze a complaint's text and return structured fields.
 * @param {{ title: string, description: string }} complaint
 */
async function analyzeComplaint(complaint) {
  // TODO: replace with a real call, e.g.:
  // const { data } = await axios.post(process.env.AI_API_URL, { ... });
  return {
    incidentType: 'Unclassified',
    severity: 'Low',
    summary: complaint.description.slice(0, 160),
    suggestedCategory: 'General',
  };
}

/**
 * Classify the risk level of a free-text SOS message.
 * @param {string} message
 * @returns {Promise<'Normal'|'Medium Risk'|'High Risk'|'Emergency'>}
 */
async function classifyEmergencyRisk(message = '') {
  // TODO: replace with a real model call. This is a temporary keyword
  // heuristic so the SOS flow is testable end-to-end before the AI is
  // wired in — it is NOT a substitute for the real classifier.
  const text = message.toLowerCase();
  if (/kidnap|abduct|gun|weapon|attack/.test(text)) return 'Emergency';
  if (/follow|stalk|threat|scared|unsafe/.test(text)) return 'High Risk';
  if (text.trim().length === 0) return 'Medium Risk';
  return 'Normal';
}

/**
 * Generate a structured police-complaint draft from a complaint record.
 * @param {{ title: string, description: string, location: object, incidentDateTime: Date }} complaint
 */
async function generateComplaintDraft(complaint) {
  // TODO: replace with a real generative call.
  return [
    `Subject: Complaint regarding "${complaint.title}"`,
    '',
    `Date & Time of Incident: ${new Date(complaint.incidentDateTime).toLocaleString()}`,
    `Location: ${complaint.location?.address || 'Not specified'}`,
    '',
    'Description:',
    complaint.description,
  ].join('\n');
}

module.exports = { analyzeComplaint, classifyEmergencyRisk, generateComplaintDraft };
