import app from './app';
import { startConnection } from './database';

startConnection();
app.listen(5000)

console.log('Server on port 5000')