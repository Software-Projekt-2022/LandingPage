import React from 'react';
import socketio from 'socket.io-client';
import CONFIG from '../config';

export const socket = socketio.connect(CONFIG.backendURL);
export const SocketContext = React.createContext();