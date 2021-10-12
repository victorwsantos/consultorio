const express = require('express');
const app= express();
const mysql = require('mysql');
const cors = require('cors')
//conexão com o banco
 
const db = mysql.createPool({
     host: 'localhost',
     user: 'root',
     password: 'Gabriella@23',
     database:'dentista'
 })

 app.use(cors());
 app.use(express.json())
 
 app.post('/cadastro', (req, res)=>{
    const {nome} = req.body;
    const {email} = req.body;
    const {idade} = req.body;
    const {telefone} = req.body;

    const sql = "INSERT INTO pacientes (nome, email, idade, telefone) VALUES (?,?,?,?);"
    db.query(sql,[nome, email, idade, telefone],(err, result)=>{
        console.log(err)
    })
  
})

app.listen(3001, ()=>{
    console.log('Servidor rodando na Porta 3001')
})