import { APIServer } from "./server";
const config = require('./config');

const server: APIServer = new APIServer(config);

server.init();
