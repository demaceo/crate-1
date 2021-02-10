import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema/index';
import connection from '../../../setup/database'
import { TokenKind } from 'graphql';

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
        .send({query: '{user(id:1) {id name email role survey stylePreference}}'})
        .expect(200)
        expect(response.body.data.user.id).toBe(1);
        expect(response.body).toMatchObject(
          {
            data: {
              user: {
                id: 1,
                name: 'The Admin',
                email: 'admin@crate.com',
                role: 'ADMIN',
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

  it('user login', async (done) => {
    const response = await request(server)
    .post('/graphql')
        .send({query: '{userLogin(email: "admin@crate.com", password: "123456") {token}}'})
        .expect(200)
        expect(response.body.data.userLogin).toHaveProperty('token')
    done();
  });

  afterAll(done => {
    connection.close();
    done();
  });
});