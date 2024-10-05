import flask
from firebase_admin import initialize_app
from firebase_functions import https_fn

initialize_app()
app = flask.Flask(__name__)


@app.get("/test")
@app.get("/test/<name>")
def test(name=None):
    args = flask.request.args
    resp_json = {"args": args, "name": name}
    return resp_json, 200


# Expose Flask app as a single Cloud Function:


@https_fn.on_request()
def agri_server(req: flask.Request) -> flask.Response:
    with app.request_context(req.environ):
        return app.full_dispatch_request()
