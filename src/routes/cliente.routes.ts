import Router from 'express';
import { getClientes, getClientesById, createCliente, updateCliente, deleteCliente, } from '../controllers/cliente.controller';

const router = Router();

router.get('/clientes', getClientes)
router.get('/clientes/:id', getClientesById);
router.post('/clientes', createCliente)
router.put('/clientes/:id', updateCliente)
router.delete('/clientes/:id', deleteCliente)

export default router;