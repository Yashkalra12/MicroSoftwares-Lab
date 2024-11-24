const net = require('net');
const { serialize, deserialize } = require('./serializer');

const PORT = 6379;

// In-memory store for key-value pairs
const store = {};

const handleCommand = (command) => {
    const [action, ...args] = command;

    switch (action.toUpperCase()) {
        case 'PING':
            return '+PONG\r\n';
        case 'ECHO':
            return `+${args.join(' ')}\r\n`;
        case 'SET':
            if (args.length < 2) return '-ERR wrong number of arguments for SET\r\n';
            const [key, value] = args;
            store[key] = value;
            return '+OK\r\n';
        case 'GET':
            if (args.length < 1) return '-ERR wrong number of arguments for GET\r\n';
            const result = store[args[0]];
            return result ? `$${result.length}\r\n${result}\r\n` : '$-1\r\n';
        default:
            return '-ERR unknown command\r\n';
    }
};

const server = net.createServer((socket) => {
    console.log('Client connected');

    socket.on('data', (data) => {
        try {
            const commands = deserialize(data.toString());
            const responses = commands.map(handleCommand);
            socket.write(responses.join(''));
        } catch (error) {
            socket.write('-ERR invalid request\r\n');
        }
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Redis Lite server running on port ${PORT}`);
});
