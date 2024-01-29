const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    res.send('this was deployed on vercel')
})

app.listen(3000, ()=>{
    console.log('server running on post 3000')
})