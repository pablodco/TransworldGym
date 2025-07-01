from fastapi import FastAPI
from routers import auth, clases

app = FastAPI()

app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(clases.router, prefix="/api/clases", tags=["clases"])

@app.get("/")
def root():
    return {"msg": "API del gimnasio funcionando"}