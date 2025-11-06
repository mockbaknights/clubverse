from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class MemberSummary(BaseModel):
    id: int
    first_name: str
    last_name: str
    club_number: Optional[str]
    email: str

    class Config:
        orm_mode = True

class MemberDetail(MemberSummary):
    phone: Optional[str]
    join_date: datetime
