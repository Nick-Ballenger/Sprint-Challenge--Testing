const db = require('../data/dbConfig.js');
const gamesDb = require('./gameModel.js')
const server = require('../api/server.js')
const req = require('supertest')



describe('Game Model', () =>{


    describe('/POST insert()', () =>{
        afterEach(async () =>{
            await db('games').truncate()
        })

        it('should post both games and give a status of 201', async()=>{
            await gamesDb.insert({ title: 'Gran Turismo', genre: 'Racing Sim', releaseYear: '1999'})
            await gamesDb.insert({ title: 'FFVII', genre: 'JRPG', releaseYear: '1997'})
            const games = await db('games')
            expect(games[0].title).toBe('Gran Turismo')
            expect(games).toHaveLength(2)
            expect(201)

        })

        it('should post single game', async()=>{
            await gamesDb.insert({ title: 'Bioshock', genre: 'Story Shooter', releaseYear: '2006' });
            const games = await db('games')
            expect(games[0].title).toBe('Bioshock')

        })

        it("should return 422 when posting a game incorrectly", () => {
            return req(server)
              .post("/games")
              .send({ title: "test" })
              .expect(422);
          })

        
    })
})