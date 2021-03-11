import { Request, Response } from 'express'
import { QueryResult, Query } from 'pg'


import { pool } from '../database'

export const getClientes = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('select * from clientes');
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Internal Server error');
    }
}

export const getClientesById = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const response: QueryResult = await pool.query('select * from clientes where id = $1', [id]);
    return res.status(200).json(response.rows);
}

export const createCliente = async (req: Request, res: Response): Promise<Response> => {
    const { nombre, apellido, numeroDocumento, correo } = req.body;
    await pool.query('insert into clientes (nombre, apellido, numero_documento, correo) values ($1, $2, $3, $4)', [nombre, apellido, numeroDocumento, correo]);
    return res.status(200).json({
        message: 'Cliente created Succesfully',
        body: {
            Cliente: {
                nombre,
                apellido,
                numeroDocumento,
                correo
            }
        }
    })
}

export const updateCliente = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const { nombre, apellido, numeroDocumento, correo } = req.body;
    await pool.query('update clientes set nombre = $1, apellido = $2, numero_documento = $3, correo = $4 where id = $5', [nombre, apellido, numeroDocumento, correo, id]);
    return res.status(200).json(
        `Cliente ${id} updated Succesfully`
    );
}

export const deleteCliente = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    await pool.query('delete from clientes where id = $1', [id]);
    return res.status(200).json(
        `Cliente ${id} deleted Succesfully`
    );
}