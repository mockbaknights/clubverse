from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.app.db.database import get_db
from backend.app.models.member import Member

router = APIRouter()

@router.get("/")
def list_members(db: Session = Depends(get_db)):
    return db.query(Member).filter(Member.is_active == True).all()
