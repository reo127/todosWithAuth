require('dotenv').config()
const express = require('express');
const app = express()
const bodyparser = require('body-parser')
const cookies = require('cookie-parser')
const connectToDB = require('./dbcon')
const userRouter = require('./routers/userRouter')
const todoRouter = require('./routers/todoRouter')
const cors = require('cors')


// Using middlewares
app.use(express.json());
app.use( bodyparser.urlencoded({extended: true }));
app.use(cookies());
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000',
  }));


// Cnnecting Database
connectToDB()


// Using routers
app.use('/auth', userRouter)
app.use('/app', todoRouter)


app.get('/', (req, res)=> {
    res.send('Hallo world')
})


// Listning port
const port = process.env.PORT || 8000
app.listen( port , ()=>{
    console.log(`listening on port ${port}`)
})