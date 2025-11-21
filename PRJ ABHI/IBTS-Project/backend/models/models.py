from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Boolean, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime

Base = declarative_base()

class Bus(Base):
    __tablename__ = "buses"

    id = Column(Integer, primary_key=True, index=True)
    bus_number = Column(String, unique=True, index=True, nullable=False)
    source = Column(String, index=True, nullable=False)
    destination = Column(String, index=True, nullable=False)
    seats = Column(Integer, nullable=False)
    departure_time = Column(String, nullable=False)
    arrival_time = Column(String, nullable=False)
    fare = Column(Float, nullable=False)
    bus_type = Column(String, default="AC Sleeper")
    amenities = Column(String, default="WiFi,Charging Point,Water Bottle")
    rating = Column(Float, default=4.2)
    operator = Column(String, default="UP State Transport")
    
    # Relationships
    bookings = relationship("Booking", back_populates="bus", cascade="all, delete-orphan")
    tracking_data = relationship("Tracking", back_populates="bus", cascade="all, delete-orphan")

class Booking(Base):
    __tablename__ = "bookings"
    
    id = Column(Integer, primary_key=True, index=True)
    passenger_name = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    seat_number = Column(Integer, nullable=False)
    bus_id = Column(Integer, ForeignKey("buses.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=True)
    paid = Column(Boolean, default=False)
    booking_time = Column(DateTime, default=datetime.utcnow)
    pnr = Column(String, unique=True)

    # Relationship
    bus = relationship("Bus", back_populates="bookings")

class Tracking(Base):
    __tablename__ = "tracking"
    
    id = Column(Integer, primary_key=True, index=True)
    bus_id = Column(Integer, ForeignKey("buses.id"), nullable=False)
    latitude = Column(Float, nullable=False)
    longitude = Column(Float, nullable=False)
    timestamp = Column(DateTime, default=datetime.utcnow)

    # Relationship
    bus = relationship("Bus", back_populates="tracking_data")

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    phone = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)

class Payment(Base):
    __tablename__ = "payments"
    
    id = Column(Integer, primary_key=True, index=True)
    booking_id = Column(Integer, ForeignKey("bookings.id"), nullable=False)
    amount = Column(Float, nullable=False)
    payment_method = Column(String, nullable=False)
    status = Column(String, default="pending")
    transaction_id = Column(String, unique=True)
    created_at = Column(DateTime, default=datetime.utcnow)