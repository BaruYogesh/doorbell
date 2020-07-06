const io = require('socket.io-client');
const gpio = require('pigpio').Gpio;

const button = new gpio(3, {
    mode: Gpio.INPUT,
    pullUpDown: Gpio.PUD_DOWN,
    edge: Gpio.EITHER_EDGE
})

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('connected');
})

socket.on('rang doorbell', () => {
    console.log('rang doorbell');
})

socket.on('status update', (data) => {
    console.log(data);
})

button.on('interrupt', (level) => {
    socket.emit('ring');
})