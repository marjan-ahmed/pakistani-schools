from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory list to store registered schools
registered_schools = []

@app.post("/register-school")
async def register_school(request: Request):
    data = await request.json()
    registered_schools.append(data)  # store the data
    return {"message": "School registered", "data": data}

@app.get("/schools")
async def get_schools():
    return {"schools": registered_schools}
