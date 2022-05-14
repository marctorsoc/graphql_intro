
import {
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
} from "graphql"

import {authors, books} from './data.js';
import { AuthorType } from "./types/authorType.js";
import { BookType } from "./types/bookType.js";
import { generateUuid } from "../../utils"


export const LibraryMutations = {
    // name: 'Mutation',
    // description: 'Root Mutation',
    // fields: () => ({
      addBook: {
        type: BookType,
        description: 'Add a book',
        args: {
          name: { type: new GraphQLNonNull(GraphQLString) },
          authorId: { type: new GraphQLNonNull(GraphQLInt) },
          year: {type: GraphQLInt},
        },
        // TODO: move to a method
        resolve: (parent: any, args: any) => {
          const book = { id: generateUuid(), name: args.name, authorId: args.authorId }
          books.push(book)
          return book
        }
      },
      addAuthor: {
        type: AuthorType,
        description: 'Add an author',
        args: {
          name: { type: new GraphQLNonNull(GraphQLString) },
          yearBorn: {type: GraphQLInt},
          yearDeath: {type: GraphQLInt},
        },
        resolve: (parent: any, args: any) => {
          const author = { id: generateUuid(), name: args.name, yearBorn: args.yearBorn, yearDeath: args.yearDeath }
          authors.push(author)
          return author
        }
    }
    //   }
    // })
  }