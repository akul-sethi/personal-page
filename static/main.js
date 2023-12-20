var socket = io()

socket.on("response", (msg) => {
  document.getElementById("responses").innerHTML += msg + "<br>"
}) 

function clicked() {
  input = document.getElementById("input")
  document.getElementById("responses").innerHTML += "> " + input.value + "<br>"
  command(input.value)
  input.value = ""
}
function command(str) {
  socket.emit("command", str)
}
