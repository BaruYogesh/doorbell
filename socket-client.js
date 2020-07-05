const io = require('socket.io-client')

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('connected');

})

socket.on('rang doorbell', () => {
    console.log('rang doorbell');
})
setInterval(() => {
    socket.emit('ring');
}, 5000);