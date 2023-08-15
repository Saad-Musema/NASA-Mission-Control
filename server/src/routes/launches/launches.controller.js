const {getAllLaunches, addNewLaunch, scheduleNewLaunch} = require('../../models/launches.model');


async function httpGetAllLaunches(req, res){
    return res.status(200).json(await getAllLaunches());
}

async function httpAddNewLaunch(req, res){
    const launch = req.body;
    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
        return res.status(400).json({
            error: 'Missing Launch Property',
        })
    }

    launch.launchDate = new Date(launch.launchDate);
   if(isNaN(launch.launchDate)){
    return res.status(400).json({
        error: 'Invalid date input',
    })
   }
    await scheduleNewLaunch(launch); 
    return res.status(201).json(launch);
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
}