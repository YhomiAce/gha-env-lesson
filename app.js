import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';

const app = express();

app.use(bodyParser.json());

app.use(eventRoutes);
const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server listening on http://localhost:'+PORT));
