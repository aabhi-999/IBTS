from pydantic import BaseModel, validator
from datetime import datetime
from typing import Optional

class BusCreate(BaseModel):
    bus_number: str
    source: str
    destination: str
    seats: int
    departure_time: str
    arrival_time: str
    fare: float
    bus_type: str = "AC Sleeper"
    amenities: str = "WiFi,Charging Point,Water Bottle"
    rating: float = 4.2
    operator: str = "UP State Transport"
    
    @validator('seats')
    def validate_seats(cls, v):
        if v <= 0:
            raise ValueError('Seats must be greater than 0')
        return v

class BusResponse(BaseModel):
    id: int
    bus_number: str
    source: str
    destination: str
    seats: int
    departure_time: str
    arrival_time: str
    fare: float
    bus_type: str = "AC Sleeper"
    amenities: str = "WiFi,Charging Point,Water Bottle"
    rating: float = 4.2
    operator: str = "UP State Transport"
    
    class Config:
        from_attributes = True

class BusSearchRequest(BaseModel):
    source: str
    destination: str
    bus_type: Optional[str] = None
    min_rating: Optional[float] = None
    max_fare: Optional[float] = None

class UserCreate(BaseModel):
    name: str
    email: str
    phone: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: str
    created_at: datetime
    
    class Config:
        from_attributes = True

class PaymentCreate(BaseModel):
    booking_id: int
    amount: float
    payment_method: str

class PaymentResponse(BaseModel):
    id: int
    booking_id: int
    amount: float
    payment_method: str
    status: str
    transaction_id: Optional[str]
    created_at: datetime
    
    class Config:
        from_attributes = True

class BookingCreate(BaseModel):
    passenger_name: str
    phone: str
    seat_number: int
    bus_id: int
    user_id: Optional[int] = None
    
    @validator('seat_number')
    def validate_seat(cls, v):
        if v <= 0:
            raise ValueError('Seat number must be greater than 0')
        return v

class BookingResponse(BaseModel):
    id: int
    passenger_name: str
    phone: str
    seat_number: int
    bus_id: int
    user_id: Optional[int]
    paid: bool
    booking_time: datetime
    pnr: Optional[str]
    
    class Config:
        from_attributes = True

class TrackingCreate(BaseModel):
    bus_id: int
    latitude: float
    longitude: float
    
    @validator('latitude')
    def validate_latitude(cls, v):
        if not -90 <= v <= 90:
            raise ValueError('Latitude must be between -90 and 90')
        return v
    
    @validator('longitude')
    def validate_longitude(cls, v):
        if not -180 <= v <= 180:
            raise ValueError('Longitude must be between -180 and 180')
        return v

class TrackingResponse(BaseModel):
    id: int
    bus_id: int
    latitude: float
    longitude: float
    timestamp: datetime
    
    class Config:
        from_attributes = True