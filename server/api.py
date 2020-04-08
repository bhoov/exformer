from pydantic import BaseModel
from typing import *

class HashableBaseModel(BaseModel):
    def __hash__(self):
        return hash(self.json())

class MaskUpdatePayload(HashableBaseModel):
    model: str
    tokens: List[str]
    sentence: str
    mask: List[int]
    layer: int