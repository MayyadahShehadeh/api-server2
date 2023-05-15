'use strict';

const server = require('../server');

const supertest = require('supertest');

const request = supertest(server.app);


describe('testing API server' , () =>{

// it('testing /', async() =>{
// const res = await request.get('/');
// expect(res.text).toEqual('home route');
// expect(res.status).toEqual(200);
// })

// // test bad rout 
// it('404 on a bad route', async()=>{
//     const res = await request.get('/asd');
//     expect(res.status).toEqual(404);
// })

// // 404 on a bad method
// it('404 on a bad method' ,async () =>{
//     const response = await request.post(`/person?name=${String}`);
//     expect(response.status).toEqual(404);
// })

it("food get test", async () => {
    let obj =  {
        foodName: "pizza",
      }

    const response = await request.get(`/food`);
    expect(response.status).toEqual(200);
  });

// it('Create a record using POST' , () =>{


// })

})

