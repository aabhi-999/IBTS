from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from model import Booking, Bus

router = APIRouter()

# Get all bookings
@router.get("/")
def get_bookings(db: Session = Depends(get_db)):
    return db.query(Booking).all()

# Create a new booking
@router.post("/")
def create_booking(passenger_name: str, seat_number: int, bus_id: int, db: Session = Depends(get_db)):
    bus = db.query(Bus).filter(Bus.id == bus_id).first()
    if not bus:
        raise HTTPException(status_code=404, detail="Bus not found")

    # Check if seat already booked
    seat_taken = db.query(Booking).filter(
        Booking.bus_id == bus_id,
        Booking.seat_number == seat_number
    ).first()

    if seat_taken:
        raise HTTPException(status_code=400, detail="Seat already booked")

    booking = Booking(passenger_name=passenger_name, seat_number=seat_number, bus_id=bus_id, paid=False)
    db.add(booking)
    db.commit()
    db.refresh(booking)
    return {"message": "Booking successful", "booking_id": booking.id}

