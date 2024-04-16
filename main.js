// main.js

const Publisher = require('./Publisher');
const Subscriber = require('./Subscriber');

// Create publisher
const publisher = new Publisher();

// Create subscribers
const subscriber1 = new Subscriber("Subscriber 1", publisher);
const subscriber2 = new Subscriber("Subscriber 2", publisher);

// Subscribe subscribers
subscriber1.subscribe();
subscriber2.subscribe();

// Start publisher
publisher.start();
