from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

class LoginInput(BaseModel):
    username: str
    password: str

@router.post("/login")
def login(data: LoginInput):
    if data.username == "admin" and data.password == "1234":
        return {"token": "fake-jwt-token"}
    raise HTTPException(status_code=401, detail="Credenciales incorrectas")
