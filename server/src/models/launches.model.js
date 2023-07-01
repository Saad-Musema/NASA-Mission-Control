const launches = new Map();


const launch = {
    flightNumber : 100,
    mission: 'Trial',
    rocket: 'explorer IE',
    launchDate : new Date('DEcember 27, 2030'),
    destination: 'kepler-442 b',
    upcoming : true,
    sucess: true,
}

launches.set(launch.flightNumber, launch);

console.log(launches.values())

module.exports = {
    launches,
};