const mysql=require('mysql')

let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Adi@9315',
    database:'task1'
})

module.exports=connection;