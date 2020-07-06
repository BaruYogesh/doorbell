var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var gpio = require('pigpio').Gpio

io.on('connection', function(socket) {
    console.log('A user connected');
 
    //Whenever someone disconnects this piece of code executed
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });

    socket.on('ring', () => {
        console.log('rang doorbell')
        io.emit('rang doorbell')
    })

    setInterval(() => {
        socket.emit('status update', { color: 'red' })
    }, 5000)

});

http.listen(3000, function() {
    console.log('listening on *:3000');
});