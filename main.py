from fastapi import FastAPI
from routes import buses, booking, tracking
from database import engine
from model import Base  # ⬅️ this pulls Base that was imported in models.py
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # in production, replace "*" with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 
Base.metadata.create_all(bind=engine)
app = FastAPI(title="ITBS Backend")

# include routers
app.include_router(buses.router, prefix="/buses", tags=["Buses"])
app.include_router(booking.router, prefix="/booking", tags=["Booking"])
app.include_router(tracking.router, prefix="/tracking", tags=["Tracking"])

@app.get("/")
def root():
    return {"message": "Welcome to ITBS Web Application 🚍"}
print("http://127.0.0.1:8000/docs")
print("uvicorn main:app --reload")