require('./models/db')
const express=require('express')
const rest=require('./controller/restController')
const cors=require('cors')

const PORT=process.env.PORT||8000

const app=express()
app.use(express.json())
app.use(cors())




app.use('/',rest)

if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'))
}

app.listen(PORT);