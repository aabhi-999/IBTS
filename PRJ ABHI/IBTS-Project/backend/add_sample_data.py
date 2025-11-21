from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Base, Bus

# Create tables
Base.metadata.create_all(bind=engine)

# Sample bus data
sample_buses = [
    {
        "bus_number": "UP-01-1234",
        "source": "Lucknow",
        "destination": "Delhi", 
        "seats": 40,
        "departure_time": "08:00",
        "arrival_time": "14:00",
        "fare": 450.0,
        "bus_type": "AC Sleeper",
        "operator": "UP State Transport"
    },
    {
        "bus_number": "UP-02-5678", 
        "source": "Kanpur",
        "destination": "Agra",
        "seats": 35,
        "departure_time": "10:30", 
        "arrival_time": "15:30",
        "fare": 320.0,
        "bus_type": "AC Sleeper",
        "operator": "UP State Transport"
    },
    {
        "bus_number": "UP-03-9012",
        "source": "Lucknow", 
        "destination": "Kanpur",
        "seats": 45,
        "departure_time": "06:30",
        "arrival_time": "09:00", 
        "fare": 180.0,
        "bus_type": "Non-AC",
        "operator": "UP State Transport"
    }
]

def add_sample_data():
    db = SessionLocal()
    try:
        # Check if data already exists
        if db.query(Bus).count() > 0:
            print("Sample data already exists!")
            return
            
        # Add sample buses
        for bus_data in sample_buses:
            bus = Bus(**bus_data)
            db.add(bus)
        
        db.commit()
        print("Sample data added successfully!")
        
    except Exception as e:
        print(f"Error adding sample data: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    add_sample_data()