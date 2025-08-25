from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Boolean
from sqlalchemy.orm import relationship
from database import Base

class Bus(Base):
    __tablename__ = "buses"

    id = Column(Integer, primary_key=True, index=True)
    bus_number = Column(String, unique=True, index=True)
    source = Column(String, index=True)
    destination = Column(String, index=True)
    seats = Column(Integer)

class Booking(Base):
    __tablename__ = "bookings"
    id = Column(Integer, primary_key=True, index=True)
    passenger_name = Column(String)
    seat_number = Column(Integer)
    bus_id = Column(Integer, ForeignKey("buses.id"))
    paid = Column(Boolean, default=False)

    bus = relationship("Bus", back_populates="bookings")

class Tracking(Base):
    __tablename__ = "tracking"
    id = Column(Integer, primary_key=True, index=True)
    bus_id = Column(Integer, ForeignKey("buses.id"))
    latitude = Column(Float)
    longitude = Column(Float)
    timestamp = Column(DateTime)

    bus = relationship("Bus")
