'use strict';

const { expect } = require('@jest/globals');
const logger = require('../src/middleware/logger');

describe('testing logger middleware',()=>{
// spyOn is for call or check or go throu out all objects to do the test but consoleSpy is specefic for console log
    let consoleSpy; // consoleSpy is for call or check or go throu out all console logs to do the test 
    let req = {};
    let res = {}; // define blank request and response just for the test
    let next = jest.fn(); // blank function from jest 

    beforeEach(()=>{
        consoleSpy = jest.spyOn(console,'log').mockImplementation(); // mockImplementation => is for to show modules or more lines when do run test in terminal
    })

    afterAll(()=>{
        consoleSpy.mockRestore(); // to return show mudules lines after did all tests 
    })

    it('test log',()=>{
        // to make fake call to the middleware 
        logger(req,res,next);
        expect(consoleSpy).toHaveBeenCalled(); //'toHaveBeenCalled()' => expect the console log to be run or to be shown when do request
    })
    it('test next',()=>{
        logger(req,res,next);
        expect(next).toHaveBeenCalled(); //'toHaveBeenCalled()' => expect the next to be run when do request and use the middleware
    })
})