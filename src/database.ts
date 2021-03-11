import {Pool} from 'pg';

export const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password: '',
    database:'clientes_productos',
    port: 5432,
});