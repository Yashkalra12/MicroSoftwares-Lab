### **README.md**

```markdown
# Redis Lite

Redis Lite is a simplified version of the Redis server, implemented in JavaScript. This project demonstrates how a basic key-value store can be built using the Redis Serialization Protocol (RESP). Redis Lite supports basic commands like `PING`, `ECHO`, `SET`, and `GET`.

## Features

- RESP serialization and deserialization.
- Basic Redis commands:
  - `PING`: Responds with `PONG`.
  - `ECHO`: Echoes back the provided input.
  - `SET`: Sets a key-value pair in the in-memory store.
  - `GET`: Retrieves the value of a key.
- Simple server implementation using Node.js.

## Prerequisites

- Node.js (version 16 or later)
- npm (Node.js package manager)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd redis-lite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the tests:
   ```bash
   npm test
   ```

## Running the Server

To start the Redis Lite server:

```bash
node src/index.js
```

The server listens on **port 6379** by default.

## Usage

You can interact with the server using the Redis CLI or any Redis client library. Below are some example commands:

### PING Command
```bash
redis-cli PING
# Output: PONG
```

### ECHO Command
```bash
redis-cli ECHO "Hello World"
# Output: "Hello World"
```

### SET and GET Commands
```bash
redis-cli SET name Yash
# Output: OK

redis-cli GET name
# Output: "Yash"
```

## Project Structure

```
redis-lite/
├── src/
│   ├── index.js          # Entry point for the server
│   ├── serializer.js     # Handles RESP serialization and deserialization
├── tests/
│   ├── serializer.test.js  # Unit tests for serializer functionality
├── package.json          # Project metadata and dependencies
├── README.md             # Documentation
```

## Development Steps

1. **Step 1: RESP Serialization and Deserialization**
   - Implement serialization and deserialization of RESP messages.
   - Example:
     - Input: `*2\r\n$4\r\nPING\r\n`
     - Output: `["PING"]`

2. **Step 2: Basic Command Handling**
   - Implement the server to handle basic commands like `PING`, `ECHO`, `SET`, and `GET`.

3. **Step 3: Extend Server**
   - Add more Redis commands as needed.
   - Implement features like concurrency handling and data persistence.

4. **Step 4: Testing**
   - Write unit tests to validate serialization, deserialization, and command handling.

## Future Enhancements

- Implement additional Redis commands (`DEL`, `INCR`, `DECR`, etc.).
- Add data persistence and snapshot functionality.
- Improve performance to handle concurrent clients.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Author

**Yash Kalra**  
- [LinkedIn](https://www.linkedin.com/in/yashkalra12)  
- [GitHub](https://github.com/yashkalra12)

```

