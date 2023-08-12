import { io } from 'socket.io-client';
import { logger } from '../logger';

export const socket = io('http://localhost:8008');

socket.on('connect', () => {
  logger.log('socket connection: connected');
});

socket.on('disconnect', () => {
  logger.log('socket connection: disconnected');
});

export async function sendMessage(eventName, data = undefined) {
  logger.log(`${eventName}`, data);
  socket.emit(eventName, data, (val) => {
    console.log(val);
  });
}
