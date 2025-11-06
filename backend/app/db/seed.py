from backend.app.db.database import SessionLocal
from backend.app.models.member import Member

db = SessionLocal()

wildberries = [
    Member(first_name="Juniper", last_name="Wildberry", email="juniper@wildberry.club", club_number="WB001"),
    Member(first_name="Rowan", last_name="Wildberry", email="rowan@wildberry.club", club_number="WB002"),
    Member(first_name="Sage", last_name="Wildberry", email="sage@wildberry.club", club_number="WB003"),
]

db.add_all(wildberries)
db.commit()
db.close()

print("✅ Wildberry members seeded.")
