# IBTS - Intelligent Bus Transportation System

## Project Structure
```
IBTS-Project/
├── backend/                    # FastAPI Backend
│   ├── models/                # Database Models
│   │   ├── __init__.py
│   │   └── models.py
│   ├── schemas/               # Pydantic Schemas
│   │   ├── __init__.py
│   │   └── schemas.py
│   ├── routes/                # API Routes
│   │   ├── __init__.py
│   │   ├── booking.py
│   │   └── buses.py
│   ├── database.py            # DB Connection
│   ├── main.py               # FastAPI App
│   ├── add_sample_data.py    # Sample Data
│   └── requirements.txt      # Dependencies
├── frontend/                  # React Frontend
│   ├── public/               # Static Files
│   ├── src/
│   │   ├── components/       # React Components
│   │   │   ├── BusSearch.js
│   │   │   └── SplashScreen.js
│   │   ├── utils/           # API Functions
│   │   ├── App.js           # Main App
│   │   └── animations.css   # Styling
│   └── package.json         # Dependencies
├── docs/                     # Documentation
├── scripts/                  # Utility Scripts
└── README.md                # This file
```

## Quick Start (80% Working Version)
1. Run `scripts/quick-start.bat`
2. Frontend: http://localhost:3000
3. Backend: http://127.0.0.1:8000
4. API Docs: http://127.0.0.1:8000/docs

## Features
- ✅ Bus search and listing
- ✅ Simple booking with prompts
- ✅ Beautiful animated interface
- ✅ Sample data included
- ✅ Responsive design