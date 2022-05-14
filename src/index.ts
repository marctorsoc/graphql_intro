
import express from 'express';
import { graphqlHTTP } from 'express-graphql'

import {GraphQLSchema, GraphQLObjectType} from "graphql"
import {LibraryQueries} from './resources/library/queries';
import {LibraryMutations} from './resources/library/mutations';
import rootHandler from './graphiql';


const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    description: "all queries",
    fields: {
      ...LibraryQueries,
    }
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutationType",
    description: "all mutations",
    fields: {
      ...LibraryMutations,
    }
  }),
})

const app = express()
app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))
app.use('/graphiql', rootHandler)

app.listen(5000, () => console.log('Server Running'))