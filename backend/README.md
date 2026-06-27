# SafeHer AI — Backend

Express + MongoDB API for the SafeHer AI women's safety platform
(Anonymous Complaint System + SOS Emergency System).

This covers **Day 1** of the hackathon roadmap: project/backend setup
(Task 1.2) and database design (Task 1.4), plus route/controller scaffolding
so Day 2–4 features (AI analysis, evidence upload, emergency detection) have
a stable place to plug into.

## Folder structure

```
backend/
├── server.js              # App entry point
├── config/
│   └── db.js               # MongoDB connection
├── models/                 # Mongoose schemas
│   ├── User.js
│   ├── Complaint.js
│   ├── Emergency.js
│   └── EmergencyContact.js
├── controllers/             # Request handlers
│   ├── authController.js
│   ├── complaintController.js
│   └── emergencyController.js
├── routes/
│   ├── authRoutes.js
│   ├── complaintRoutes.js
│   └── emergencyRoutes.js
├── middleware/
│   ├── authMiddleware.js     # JWT protect/authorize
│   ├── errorHandler.js       # Centralized error responses
│   └── uploadMiddleware.js   # Multer config for evidence files
├── services/
│   └── aiService.js          # AI placeholder (wire up in Day 2/3)
└── utils/
    ├── ApiError.js
    ├── asyncHandler.js
    └── generateToken.js
```

## Setup

```bash
npm install
cp .env.example .env   # then fill in MONGO_URI and JWT_SECRET
npm run dev             # nodemon, auto-restarts on changes
# or
npm start
```

The server starts even without a valid `MONGO_URI` (it just logs a warning),
so you can hit `/api/health` immediately to confirm the API is alive.

## API endpoints

| Method | Endpoint                        | Auth          | Notes |
|--------|----------------------------------|---------------|-------|
| GET    | `/api/health`                   | none          | Health check |
| POST   | `/api/auth/register`            | none          | Create account |
| POST   | `/api/auth/login`               | none          | Returns JWT |
| GET    | `/api/auth/me`                  | Bearer token  | Current user profile |
| POST   | `/api/complaints`                | none*         | File a complaint (anonymous by default). Accepts `evidence` files (multipart). |
| GET    | `/api/complaints`                | admin         | List complaints (Task 2.5) |
| GET    | `/api/complaints/:id`            | Bearer token  | Single complaint |
| PATCH  | `/api/complaints/:id/status`     | admin         | Update status |
| POST   | `/api/emergency`                 | none*         | Trigger SOS — `{ lat, lng, message }` |
| GET    | `/api/emergency`                 | admin         | Live emergency feed (Task 4.5) |
| GET    | `/api/emergency/:id`             | admin         | Single emergency record |

\* Complaint filing and SOS are intentionally left open (no login required)
since both need to work for anonymous/panicked users — that's the point of
the "Anonymous Toggle" and emergency flow in the roadmap.

## What's stubbed for later days

- **`services/aiService.js`** — `analyzeComplaint`, `classifyEmergencyRisk`,
  and `generateComplaintDraft` currently return placeholder/heuristic
  results. Replace the internals with real AI calls in Day 2/3; the
  controllers won't need to change.
- **Cloudinary upload** (Task 2.2) — `uploadMiddleware.js` already parses
  multipart files into memory (`req.files`); the actual upload-to-Cloudinary
  step (and saving `evidence` URLs on the Complaint) is a Day 2 task.
- **WhatsApp bot** (Day 4) — not part of this scaffold yet.

## Next steps

1. Fill in `.env` with a real MongoDB Atlas URI and JWT secret.
2. Build the Day 1 frontend (Vite + React) against these endpoints.
3. Wire `services/aiService.js` into a real AI provider for Day 2/3.
