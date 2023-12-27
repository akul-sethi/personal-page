from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit
from pexpect.replwrap import REPLWrapper

app = Flask(__name__)
app.config["SECRET_KEY"] = "asdfasdfasdfasdf"
socketio = SocketIO(app)

users = {}


@app.route("/")
def index():
    return render_template("index.html")


@socketio.on("connection")
def connect(package):
    users[request.sid] = REPLWrapper("sethi-script/sethi", ">>>", None)


@socketio.on("command")
def command(msg):
    response = users[request.sid].run_command(msg, timeout=None)
    emit("response", response)


@socketio.on("disconnect")
def disconnect():
    users.pop(request.sid)


if __name__ == "__main__":
    app.run()
