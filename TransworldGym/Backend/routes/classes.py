from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def listar_clases():
    return [
        {"id": 1, "nombre": "Spinning", "hora": "18:00"},
        {"id": 2, "nombre": "Yoga", "hora": "19:00"},
    ]
