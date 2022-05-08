
import express from 'express';
import { graphqlHTTP } from 'express-graphql'

import {GraphQLSchema, GraphQLObjectType} from "graphql"
import {LibraryQueries} from './resources/library/queries';
// import {RootMutationType} from './mutations.js';
import rootHandler from './graphiql';


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      ...LibraryQueries,
    }
  }),
  // mutation: RootMutationType,
})

const app = express()
app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))
app.use('/graphiql', rootHandler)

app.listen(5000, () => console.log('Server Running'))