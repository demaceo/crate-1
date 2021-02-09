import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema/index';
import connection from '../../../setup/database'

describe('Test user mutations', () => {
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
  it('update a users style type', async (done) => {
      const response = await request(server)
        .post('/graphql')
        .send({query: 'mutation { createStylePreference(id:2, survey: true, styleArray: ["goth", "athletic", "beach", "athletic"]) {id survey stylePreference} }'})
        .expect(200)
        expect(response.body).toMatchObject(
          {
            data: {
              createStylePreference: {
                id: 2,
                stylePreference: "athletic",
                survey: true
                }
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