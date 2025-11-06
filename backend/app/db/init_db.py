from backend.app.db.database import engine, Base
from backend.app.models import member, account, transaction, access  # import all models

Base.metadata.create_all(bind=engine)
print("✅ Database tables created.")
