/* eslint-disable no-console */

import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import { createServer } from 'http';

import './config/db';
import constants from './config/constants';
import typeDefs from './graphQL/schema';
import resolvers from './graphQL/resolvers';
import mocks from './mocks';

const app = express(); // create an instance of express

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(bodyParser.json()); // add body-parser as the json parser middleware

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: constants.GRAPHQL_PATH,
  }),
);
app.use(
  constants.GRAPHQL_PATH,
  graphqlExpress({
    schema,
  }),
);

const graphQLServer = createServer(app);

mocks().then(() => {
  graphQLServer.listen(constants.PORT, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`App running on port: ${constants.PORT}`);
    }
  });
});
