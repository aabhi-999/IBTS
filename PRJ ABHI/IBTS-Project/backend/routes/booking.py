from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Booking, Bus
from schemas import BookingCreate, BookingResponse
from typing import List

router = APIRouter()

@router.get("/", response_model=List[BookingResponse])
def get_bookings(db: Session = Depends(get_db)):
    return db.query(Booking).all()

@router.post("/", response_model=BookingResponse)
def create_booking(booking: BookingCreate, db: Session = Depends(get_db)):
    bus = db.query(Bus).filter(Bus.id == booking.bus_id).first()
    if not bus:
        raise HTTPException(status_code=404, detail="Bus not found")

    # Check if seat already booked
    seat_taken = db.query(Booking).filter(
        Booking.bus_id == booking.bus_id,
        Booking.seat_number == booking.seat_number
    ).first()

    if seat_taken:
        raise HTTPException(status_code=400, detail="Seat already booked")

    db_booking = Booking(**booking.dict())
    
    # Generate PNR
    import random, string
    db_booking.pnr = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
    
    db.add(db_booking)
    db.commit()
    db.refresh(db_booking)
    return db_booking

@router.get("/bus/{bus_id}", response_model=List[BookingResponse])
def get_bus_bookings(bus_id: int, db: Session = Depends(get_db)):
    return db.query(Booking).filter(Booking.bus_id == bus_id).all()

