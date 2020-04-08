from pydantic import BaseModel
from typing import *

class MaskUpdatePayload(BaseModel):
    model: str
    tokens: List[str]
    sentence: str
    mask: List[int]
    layer: int