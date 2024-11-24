// Serialize RESP messages
const serialize = (message) => {
    if (Array.isArray(message)) {
        const length = message.length;
        const serialized = message.map((item) => `$${item.length}\r\n${item}`).join('\r\n');
        return `*${length}\r\n${serialized}\r\n`;
    }
    throw new Error('Unsupported message type');
};

// Deserialize RESP messages
const deserialize = (data) => {
    const commands = [];
    const lines = data.split('\r\n').filter((line) => line !== '');

    let i = 0;
    while (i < lines.length) {
        const line = lines[i];
        if (line.startsWith('*')) {
            const count = parseInt(line.slice(1), 10);
            const command = [];
            for (let j = 0; j < count; j++) {
                i += 2; // Skip the "$length" line
                command.push(lines[i]);
            }
            commands.push(command);
        }
        i++;
    }
    return commands;
};

module.exports = { serialize, deserialize };
