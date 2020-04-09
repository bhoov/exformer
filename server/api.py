"""Defines the API requests for every route in the model

There are 3 kinds of typings:
- Abstract :: These are inheritable base classes for the other responses
- Payloads :: These are passed in the body of POST requests from the frontend
- Response :: These are returned from a route in the backend
"""
from pydantic import BaseModel
from typing import *

# ABSTRACT
class HashableBaseModel(BaseModel):
    def __hash__(self):
        return hash(self.json())

class HashableResponseModel(HashableBaseModel):
    status: int = 200

# REQUESTING
class MaskUpdatePayload(HashableBaseModel):
    model: str
    tokens: List[str]
    sentence: str
    mask: List[int]
    layer: int
    request_hash: Optional[str] = None

# RESPONDING
class ModelDetailPayload(BaseModel):
    nlayers: int
    nheads: int

class ModelDetailResponse(HashableResponseModel):
    payload: ModelDetailPayload