require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const routes = require('./routes');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }))
server.use(cookieParser())
server.use(cors())
server.use(routes)

mongoose.set('strictQuery', true)
Promise.all(
    [
        mongoose.connect(process.env.MONGODB_URI),
        // redis.connect()
    ]
).then(()=>require('./models'))
//TODO add loader all the models
.then((ttt) => {
    server.listen(4041, () => console.log(4041))
})
.catch(error => console.error(error))


