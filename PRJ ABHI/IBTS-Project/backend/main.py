from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import buses, booking
from database import engine
from models import Base

# Create FastAPI app instance first
app = FastAPI(title="ITBS Backend")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # in production, replace "*" with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create all database tables
Base.metadata.create_all(bind=engine)

# Include routers
app.include_router(buses.router, prefix="/buses", tags=["Buses"])
app.include_router(booking.router, prefix="/booking", tags=["Booking"])

@app.get("/")
def root():
    return {"message": "Welcome to ITBS Web Application 🚍"}

if __name__ == "__main__":
    print("FastAPI server starting...")
    print("Documentation: http://127.0.0.1:8000/docs")
    print("Run command: uvicorn main:app --reload")