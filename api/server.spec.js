const server = require('./server.js')
const request = require('supertest');


    describe('GET /games', () =>{
        it('should return a status of 200 ', () =>{
           return request(server)
            .get('/games')
            .then(res=>{
                expect(res.status).toBe(200)
            })
        })
        

        it('should return 200 using async/await', async() =>{
            const res = await request(server).get('/games')

            expect(res.status).toBe(200)
        })

        it('should return JSON as type of data', async() =>{
            const res = await request(server).get('/games')
            expect(res.type).toBe('application/json')
        })

        it('should return an empty array', async () =>{
            const res = await request(server).get('/games')
            expect(res.body).toEqual([])
        })

    })