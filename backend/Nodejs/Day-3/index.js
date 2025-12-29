const EventEmitter = require('events');

const userEmitter = new EventEmitter();

userEmitter.on('login', (username) => {
    console.log(`User ${username} has logged in.`);
});

userEmitter.on('logout', (username) => {
    console.log(`User ${username} has logged out.`);
});

userEmitter.on('Purchase', (username, item) => {
    console.log(`User ${username} purchased ${item}.`);
});

userEmitter.on('ProfileUpdate', (username , field) => {
    console.log(`User ${username} updated their profile: ${field}.`);
});

userEmitter.emit('login', 'john_doe');
userEmitter.emit('logout', 'john_doe');
userEmitter.emit('Purchase', 'john_doe', 'Laptop');
userEmitter.emit('ProfileUpdate', 'john_doe', 'Profile Picture');