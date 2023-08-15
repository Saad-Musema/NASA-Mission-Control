const request = require('supertest');
const app = require('../../app');


describe('Test /GET Planets', ()=>{
    test('It should get 200 response', async ()=> {
        const response = request(app)
            .get('/planets')
            .expect(200)
    })

})