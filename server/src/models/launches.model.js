const launchesDB = require('./launches.mongo');
const planets = require('./planets.mongo');
// const launches = new Map();

const DefaultFlightNumber = 100;

const launch = {
    flightNumber : 100,
    mission: 'Trial',
    rocket: 'explorer IE',
    launchDate : new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customers : ['Zero to Mastery', 'NASA'],
    upcoming : true,
    sucess: true,
}

const launch1 = {
    mission: 'Second Try',
    rocket: 'explorer IE',
    launchDate : new Date('December 29, 2030'),
    target: 'Kepler-442 b',
    customers : ['Zero to Mastery', 'NASA'],
    upcoming : true,
    sucess: true,
}

saveLanuch(launch);
saveLanuch(launch1);
// launches.set(launch.flightNumber, launch);


async function getAllLaunches(){
    return await launchesDB.find({} , {
        '_id' : 0, '__v': 0
    }); 
}

async function scheduleNewLaunch(){
    const newFlightNumber = await getLatestFlightNumber() + 1;

    const newLaunch = Object.assign(launch, 
        {
    sucess : true,
    upcoming : true,
    customers : ['Zero to Mastery', 'NASA'],
    flightNumber : newFlightNumber,
        }) 

    await saveLanuch(newLaunch);
}


async function getLatestFlightNumber(){
    const latest = await launchesDB.findOne().sort('-flightNumber');
    if(!latest){
        return DefaultFlightNumber;
    }
    return latest.flightNumber;
}

async function saveLanuch(launch){
    const planet = await planets.findOne({
        keplerName: launch.target});

        if(!planet){
            throw new Error('No Matching Planet')
        }

    await launchesDB.updateOne({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    })
}



module.exports = {
    getAllLaunches,
    scheduleNewLaunch,
};