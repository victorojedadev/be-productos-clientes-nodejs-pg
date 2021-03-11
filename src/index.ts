import express from 'express';
import clienteRoutes from './routes/cliente.routes';

const app = express();

// middlewares
app.use(express.json());
app.use(clienteRoutes);
app.use(express.urlencoded({extended:false}));

app.listen(3000)
console.log('Server on port ', 3000);


