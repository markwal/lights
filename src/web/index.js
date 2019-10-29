const socket = io();

$( "label" ).click(function() {
  socket.emit(this.id);
});
