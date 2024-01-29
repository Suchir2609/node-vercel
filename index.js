const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    res.send('this was deployed on vercel successfully by Suchir Gupta from Bits Pilani')
})

app.listen(3000, ()=>{
    console.log('server running on post 3000')
})