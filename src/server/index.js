const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;

function send_command(command) {
  SerialPort.list()
    .then(function (ports) {
      var port_info = ports.find(function(port) { return 'vendorId' in port && port.vendorId == '239a'; });
      if (port_info) {
        var port = new SerialPort(port_info.path, {baudRate: 115200});
        var parser = port.pipe(new Readline());
        port.pipe(parser);
        parser.on('data', console.log);
        port.open(function (x) {
          port.write(command + "\n");
          setTimeout(function() {
            port.close();
          }, 500);
        });
      }
      else
        console.log('Unable to find Adafruit Feather.');
    })
    .catch(console.error);
}

server.listen(3000, function() {
  console.log('listening on *:3000');
});

app.use(express.static("dist"));

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('lights_on', function() {
    send_command('white');
  });
  socket.on('lights_off', function() {
    send_command('off');
  });
  socket.on('run_rainbow', function() {
    send_command('rainbow');
  });
});

