from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from model import Bus

router = APIRouter()

@router.get("/")
def get_buses(db: Session = Depends(get_db)):
    return db.query(Bus).all()