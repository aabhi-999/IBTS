from fastapi import FastAPI
from routes import buses, booking, tracking
from database import engine
from model import Base  
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 
Base.metadata.create_all(bind=engine)
app = FastAPI(title="ITBS Backend")
app.include_router(buses.router, prefix="/buses", tags=["Buses"])
app.include_router(booking.router, prefix="/booking", tags=["Booking"])
app.include_router(tracking.router, prefix="/tracking", tags=["Tracking"])

@app.get("/")
def root():
    return {"message": "Welcome to ITBS Web Application 🚍"}
    # code end here tip for for user who want to clane this repo ,next 2 lines are not the part of coode but very important to setup and run the code
print("http://127.0.0.1:8000/docs")#this will we the hosting site for our  application 
print("uvicorn main:app --reload")#this will setup the react app for our and the backend will be connected to our frontend 
#to start the application we have to give the command to the terminal that is ----->  npm start
