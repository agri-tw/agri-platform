import os

import flask
import google.generativeai as genai
from dotenv import load_dotenv
from firebase_admin import initialize_app
from firebase_functions import https_fn

# Load environment variables
load_dotenv()

# Initialize the Generative AI API
genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel("gemini-pro")

# Initialize Firebase Functions
initialize_app()

# Initialize Flask app
app = flask.Flask(__name__)


@app.get("/test")
@app.get("/test/<name>")
def test(name=None):
    args = flask.request.args
    resp_json = {"args": args, "name": name}
    return resp_json, 200


@app.get("/genai/test")
def genai_test():
    query = flask.request.args["query"]
    if not query:
        return {"error": "query is required"}, 400
    response = model.generate_content(query)
    return response.text, 200


# Expose Flask app as a single Cloud Function:


@https_fn.on_request()
def agri_server(req: flask.Request) -> flask.Response:
    with app.request_context(req.environ):
        return app.full_dispatch_request()
