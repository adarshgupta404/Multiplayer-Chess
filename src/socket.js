import { io } from "socket.io-client"; // import connection function

const socket = io('multiplayer-chess-backend.vercel.app'); // initialize websocket connection

export default socket;
