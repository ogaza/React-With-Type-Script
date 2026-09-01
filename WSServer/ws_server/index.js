import { WebSocketServer } from 'ws';

const port = 9090;

const wss = new WebSocketServer({ 
    port
});

// Create a WebSocket server on port 8080
// const wss = WebSocket.Server({ port });

console.log(`WebSocket server is running on ws://localhost:${port}`);

// Connection event handler
wss.on('connection', (ws) => {
  console.log('New client connected');
  
  // Send a welcome message to the client
  ws.send('Welcome to the WebSocket server!');

  ws.send('test', )

  // Message event handler
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Echo the message back to the client
    ws.send(`Server received: ${message}`);
  });

  // Close event handler
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

