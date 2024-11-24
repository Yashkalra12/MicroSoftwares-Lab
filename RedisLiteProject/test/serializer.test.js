const { serialize, deserialize } = require('../src/serializer');

describe('RESP Serializer', () => {
    test('should serialize an array of strings', () => {
        const message = ['PING'];
        const serialized = serialize(message);
        expect(serialized).toBe('*1\r\n$4\r\nPING\r\n');
    });

    test('should deserialize RESP data into commands', () => {
        const data = '*1\r\n$4\r\nPING\r\n';
        const commands = deserialize(data);
        expect(commands).toEqual([['PING']]);
    });

    test('should handle ECHO command serialization', () => {
        const message = ['ECHO', 'Hello World'];
        const serialized = serialize(message);
        expect(serialized).toBe('*2\r\n$4\r\nECHO\r\n$11\r\nHello World\r\n');
    });

    test('should handle ECHO command deserialization', () => {
        const data = '*2\r\n$4\r\nECHO\r\n$11\r\nHello World\r\n';
        const commands = deserialize(data);
        expect(commands).toEqual([['ECHO', 'Hello World']]);
    });

    test('should throw error for unsupported serialization types', () => {
        expect(() => serialize('PING')).toThrow('Unsupported message type');
    });
});
