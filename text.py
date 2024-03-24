# server.py
import asyncio
import websockets
from gtts import gTTS
import os

async def convert_text_to_audio(websocket, path):
    text = await websocket.recv()
    tts = gTTS(text=text, lang='ar')
    tts.save("output.mp3")
    os.system("start output.mp3")

start_server = websockets.serve(convert_text_to_audio, "localhost", 8765)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
