import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema/index';
import connection from '../../../setup/database'

describe('Tests the users query', () => {
  let server;
    beforeAll(() => {
       server = express();
       server.use(
           "/",
           graphqlHTTP({
               schema: schema,
               graphiql: false
           })
       )
    })
  it('returns all users', async (done) => {
      const response = await request(server)
        .post('/graphql')
        .send({query: '{users {email}}'})
        .expect(200)
        expect(response.body.data.users.length).toBe(2);

    done();
  });

  it('returns a user by id', async (done) => {
    const response = await request(server)
    .post('/graphql')
        .send({query: '{user(id:2) {id name email role survey stylePreference}}'})
        .expect(200)
        expect(response.body.data.user.id).toBe(2);
        expect(response.body).toMatchObject(
          {
            data: {
              user: {
                id: 2,
                name: 'The User',
                email: 'user@crate.com',
                role: 'USER',
                survey: null,
                stylePreference: null
              }
            }
          }
        )
    done();
  });

  it('returns all user genders', async (done) => {
    const response = await request(server)
    .post('/graphql')
        .send({query: '{userGenders {name}}'})
        .expect(200)
        expect(response.body.data.userGenders.length).toBe(2);
        expect(response.body).toMatchObject(
          {
            data: {
              userGenders: [
                {
                  name: 'Male'
                },
                {
                  name: 'Female'
                }
              ]
            }
          }
        )
    done();
  });

  afterAll(done => {
    connection.close();
    done();
  });
});