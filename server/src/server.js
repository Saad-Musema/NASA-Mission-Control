const http = require('http');
const mongoose = require('mongoose')

const {loadPlanetsData} = require('./models/planets.model');

const app = require('./app.js');
const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://nasa-api:NRQ4gl1y6rHKIosa@nasacluster.sdhwdhd.mongodb.net/nasadata?retryWrites=true&w=majority'

const server = http.createServer(app);

mongoose.connection.once('open', ()=> {
    console.log('MongoDB connection is ready!')
})

mongoose.connection.on('error', (err)=>{
    console.error(err);
})

async function startServer(){
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    })
    await loadPlanetsData();

    server.listen(PORT, ()=> {
        console.log(`Listening on Port ${PORT}`);
    });
};

startServer();



 





