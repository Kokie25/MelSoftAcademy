require('dotenv').config();
const express = require('express')
const cors = require('cors')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const connect = require('./config/database') //when we have a database

const PORT = 8000
const { userRoute, conversationRoute, gigRoute, messageRoute, orderRoute, reviewRoute, authRoute } = require('./routes');


const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(cors({
    origin: ['http://localhost:3000/'],
    credentials : true
}))
// app.use(cors())

// routes
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);


app.get('/', (request, response) => {
    response.send('Hello, Big Man!')
})

app.get('/ip', (request, response) => {
    // Try to get the 'x-forwarded-for' header (which could contain a comma-separated list of IPs)
    const forwarded = request.headers['x-forwarded-for'];
    
    // Fallback to the remote address if no forwarded IP is found
    const remoteAddress = request.socket.remoteAddress;
    
    // If the 'x-forwarded-for' is present, split and get the first IP
    const ip = forwarded ? forwarded.split(',')[0] : remoteAddress;

    return response.send({ ip });
});


app.listen(PORT, async () => {
    try {
        // await connect();
        console.log(`Listening at http://localhost:${PORT}`)
    }
    catch ({ message }) {
        console.log(message)
    }
})
