from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

# Database URL (using SQLite for now)
DATABASE_URL = "sqlite:///./test.db"

# Create engine
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

# SessionLocal class
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# ✅ Correct function to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
