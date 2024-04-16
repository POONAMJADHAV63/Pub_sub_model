const Redis = require('ioredis');
const redis = new Redis();

// Function to subscribe to messages
async function subscribe(channel) {
    await redis.subscribe(channel, (err, count) => {
        console.log(`Subscribed to ${count} channel.`);
    });

    redis.on('message', (channel, message) => {
        console.log(`Received message on channel ${channel}: ${message}`);
    });
}

// Extract channel name from command-line arguments
const [, , channel] = process.argv;

// Check if channel name is provided
if (!channel) {
    console.error('Please provide a channel name.');
    process.exit(1);
}

// Example usage
subscribe(channel);
