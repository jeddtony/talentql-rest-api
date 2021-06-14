const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

beforeAll(done => {
    /* Connect to the DB */
mongoose.connect(`mongodb://localhost:27017/${process.env.MONGO_DATABASE}`,function(){
    /* Drop the DB */
    mongoose.connection.db.dropDatabase();
});
    done()
})

describe('Sample Test', () => {
    it('should test that true === true', () => {
      expect(true).toBe(true)
    })
  });

  describe('Can register successfully', () => {
    it('should return a successful register status', async() => {
      const res = await request(app)
    .post('/register')
    .send({
      "email": "john@mail.com",
      "password": "password", 
      "name": "John"
    })
  expect(res.status).toEqual(200)
    });
})

describe('Cannot register without an email', () => {
    it('should return a 422 error status', async() => {
      const res = await request(app)
    .post('/register')
    .send({
      "password": "password", 
      "name": "John"
    })
    expect(res.status).toEqual(422)
    });
})

describe('Cannot register without a password', () => {
    it('should return a 422 error status', async() => {
      const res = await request(app)
    .post('/register')
    .send({
      "email": "john@mail.com", 
      "name": "John"
    })
    expect(res.status).toEqual(422)
    });
})

describe('Cannot register without a name', () => {
    it('should return a 422 error status', async() => {
      const res = await request(app)
    .post('/register')
    .send({
      "email": "john@mail.com", 
      "password": "password", 
    })
    expect(res.status).toEqual(422)
    });
})


//   describe('Can login successfully', () => {
//     it('should return a successful login status', async() => {
//       const res = await request(app)
//     .post('/login')
//     .send({
//       "email": "john@mail.com",
//       "password": "password"
//     })
//   expect(res.status).toEqual(200)
//     });
// })
