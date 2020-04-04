const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rotas / Recursos
 */

/**
 * Método HTTP:
 * 
 * GET: Buscar informação do back-end
 * POST: Criar um informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE:  Deletar uma informação no backe-end
 */

/**
 * Tipos de Parâmetros
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) 
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisação, utilizado   
 */

 /**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

 /**
  * Driver: SELECT * FROM 
  * Query Builder: table('user').select('*').where()
  */


app.listen(3333);