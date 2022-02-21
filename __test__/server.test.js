'use strict'

const server = require('../server.js');
const supertest = require('supertest');
const res = require('express/lib/response');
const request = supertest('server.app');

describe('testing API server', () => {
    it('test /', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
    })
    it('test /data', async () => {
        const response = await request.get('/data');
        expect(typeof response.body).toEqual('object')
    })
})