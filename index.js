const express = require('express');
const app = express()

const post = require('./post')

app.get('/post', (req,res) =>{
    res.json(post)

})

app.get('/' , (req,res)=>{

    res.send('Hola')
})

app.listen(process.env.PORT || 4000, () => console.log("Server Up"));