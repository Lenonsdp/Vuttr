
// import './bootstrap';
require('dotenv').config({
	path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
})
import express from 'express';
import path from 'path';
import cors from 'cors';
import routes from './routes';

import './database';

class App {
	constructor() {
		this.server = express();
		this.midlewares();
		this.routes();
	}

	midlewares() {
		this.server.use(express.json());
		this.server.use(cors());
		this.server.use(
			'/files',
			express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
		);
	}

	routes() {
		this.server.use(routes);
	}
}

module.exports = new App().server;
