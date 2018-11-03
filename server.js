const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const port = 8080;

app.get('/', (req, res) => {
    res.send("hello world")
})
app.get('/users', (req, res) =>{
    res.json(data)
})
app.get('/users/:id', (req, res) =>{
    let id = req.params.id
    let obj = data.filter(user => user.id === id)
    res.json(obj)
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post('/users', (req, res) => {
    let user = {
        name: req.body.name,
        id: req.body.id
    }
    data.push(user)
})

app.delete('/users/:id', (req,res) => {
    data = data.filter(user => user.id !== req.params.id)
    res.json({
        message: 'delete succesfully'
    })
})

app.put('/users/:id', (req, res) => {
    const {id} = req.params
    let userobj = {
        name: req.body.name,
        id
    }
    let index = data.findIndex(user => user.id === id)

    
    data[index] = userobj

    res.json({
        message: "updated data"
    })
    
})
app.listen(port, () => {
    console.log('app is running on port: ' + port)
})

let data = [
    {
        name: 'irin',
        id: '1'
    },
    {
        name: 'Allah',
        id: '2'
    },
    {
        name: 'muhammod',
        id: '3'
    }
]