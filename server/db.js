const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: "postgres", 
//     password: "mdEvNlDCJKMCPyd4GXA4", 
//     host: "containers-us-west-197.railway.app",
//     port: 7362, 
//     database: "railway"
// });


const pool = new Pool({
    user: process.env.PGUSER, 
    password: process.env.PGPASSWORD, 
    host: process.env.PGHOST,
    port: process.env.PGPORT, 
    database: process.env.PGDATABASE
});

module.exports = pool;