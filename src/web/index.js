const socket = io();

$( "button" ).click(function() {
  console.log("button click");
  console.log(this.id);
  socket.emit(this.id);
});
