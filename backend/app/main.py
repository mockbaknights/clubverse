from fastapi import FastAPI
from backend.app.api import members, accounts, transactions, access
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(members.router, prefix="/members", tags=["Members"])
app.include_router(accounts.router, prefix="/accounts", tags=["Accounts"])
app.include_router(transactions.router, prefix="/transactions", tags=["Transactions"])
app.include_router(access.router, prefix="/access", tags=["Access"])

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # or "*" for dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
