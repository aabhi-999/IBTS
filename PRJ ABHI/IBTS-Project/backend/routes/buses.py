from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Bus
from schemas import BusCreate, BusResponse, BusSearchRequest
from typing import List

router = APIRouter()

@router.get("/", response_model=List[BusResponse])
def get_buses(db: Session = Depends(get_db)):
    return db.query(Bus).all()

@router.post("/", response_model=BusResponse)
def create_bus(bus: BusCreate, db: Session = Depends(get_db)):
    db_bus = Bus(**bus.dict())
    db.add(db_bus)
    db.commit()
    db.refresh(db_bus)
    return db_bus

@router.get("/{bus_id}", response_model=BusResponse)
def get_bus(bus_id: int, db: Session = Depends(get_db)):
    bus = db.query(Bus).filter(Bus.id == bus_id).first()
    if not bus:
        raise HTTPException(status_code=404, detail="Bus not found")
    return bus

@router.post("/search", response_model=List[BusResponse])
def search_buses(search_request: BusSearchRequest, db: Session = Depends(get_db)):
    query = db.query(Bus).filter(
        Bus.source.ilike(f"%{search_request.source}%"),
        Bus.destination.ilike(f"%{search_request.destination}%")
    )
    
    if search_request.bus_type:
        query = query.filter(Bus.bus_type.ilike(f"%{search_request.bus_type}%"))
    
    if search_request.min_rating:
        query = query.filter(Bus.rating >= search_request.min_rating)
    
    if search_request.max_fare:
        query = query.filter(Bus.fare <= search_request.max_fare)
    
    buses = query.order_by(Bus.departure_time).all()
    return buses

@router.get("/seats/{bus_id}")
def get_bus_seats(bus_id: int, db: Session = Depends(get_db)):
    bus = db.query(Bus).filter(Bus.id == bus_id).first()
    if not bus:
        raise HTTPException(status_code=404, detail="Bus not found")
    
    from models import Booking
    booked_seats = db.query(Booking.seat_number).filter(Booking.bus_id == bus_id).all()
    booked_seat_numbers = [seat[0] for seat in booked_seats]
    
    available_seats = [i for i in range(1, bus.seats + 1) if i not in booked_seat_numbers]
    
    return {
        "bus_id": bus_id,
        "total_seats": bus.seats,
        "booked_seats": booked_seat_numbers,
        "available_seats": available_seats
    }