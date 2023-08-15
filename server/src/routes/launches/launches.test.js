const request = require('supertest');
const app = require('../../app');

describe('test /GET launches', () => {
    test('Should get 200 response', async ()=>{
        const response = await request(app)
        .get('/launches')
        .expect('Content-Type', /json/)
        .expect(200)
        })
});


describe('test /POST launches', () => {
    const completeLaunchData = {
        mission : "Trial 1",
        rocket : "Space Explorer",
        target : "kepler-155 f",
        launchDate : "July 16, 2023"
    }

    const withoutDate = {
        mission : "Trial 1",
        rocket : "Space Explorer",
        target : "kepler-155 f"
    }
    const wrongDate = {
        mission : "Trial 1",
        rocket : "Space Explorer",
        target : "kepler-155 f",
        launchDate : "trial"
    }

    
    test('Should get 201 created', async ()=>{
        const response = await request(app)
        .post('/launches')
        .send(completeLaunchData)
        .expect('Content-Type', /json/)
        .expect(201)

    expect(response.body).toMatchObject(withoutDate)
    const requestDate = new Date(completeLaunchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();
    expect(responseDate).toBe(requestDate);})


    test('Catching missing fields', async ()=> {
        const response = await request(app)
        .post('/launches')
        .send(withoutDate)
        .expect('Content-Type', /json/)
        .expect(400)


    expect(response.body).toStrictEqual({
        error: 'Missing Launch Property',
    })
    })


    test('Catch invalid date', async ()=> {
        const response = await request(app)
        .post('/launches')
        .send(wrongDate)
        .expect('Content-Type', /json/)
        .expect(400)

    expect(response.body).toStrictEqual({
        error: 'Invalid date input',
    })
    })
});

