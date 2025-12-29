const EventEmitter = require('events');

const myEmitter = new EventEmitter();
myEmitter.on('greet', (name) => {
    console.log(`Hello kia hal ha, ${name}!`);
});
myEmitter.emit('greet', 'Alice');
myEmitter.emit('greet', 'Bob');