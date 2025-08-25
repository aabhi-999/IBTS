from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from model import Tracking, Bus
from datetime import datetime

router = APIRouter()

# Update bus location (Driver/Conductor app will call this API)
@router.post("/update/")
def update_location(bus_id: int, latitude: float, longitude: float, db: Session = Depends(get_db)):
    bus = db.query(Bus).filter(Bus.id == bus_id).first()
    if not bus:
        raise HTTPException(status_code=404, detail="Bus not found")

    location = Tracking(bus_id=bus_id, latitude=latitude, longitude=longitude, timestamp=datetime.now())
    db.add(location)
    db.commit()
    db.refresh(location)
    return {"message": "Location updated", "bus_id": bus_id}

# Get latest location of a bus
@router.get("/{bus_id}")
def get_location(bus_id: int, db: Session = Depends(get_db)):
    location = db.query(Tracking).filter(Tracking.bus_id == bus_id).order_by(Tracking.timestamp.desc()).first()
    if not location:
        raise HTTPException(status_code=404, detail="No tracking data found")
    return {
        "bus_id": bus_id,
        "latitude": location.latitude,
        "longitude": location.longitude,
        "last_updated": location.timestamp
    }
