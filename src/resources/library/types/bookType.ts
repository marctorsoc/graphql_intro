import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
	GraphQLNonNull,
	GraphQLID
} from "graphql"
import { getAuthorForBook } from "../../../resolvers/library/book";
import {AuthorType} from "./authorType";


export interface Book {
	id: string,
	name: string,
	year: number,
	authorId: string,
}

export const BookType: GraphQLObjectType = new GraphQLObjectType({
	name: 'Book',
	description: 'This represents a book written by an author',
	fields: () => ({
	  id: { type: new GraphQLNonNull(GraphQLID) },
	  name: { type: new GraphQLNonNull(GraphQLString) },
	  year: { type: GraphQLInt},
	  authorId: { type: new GraphQLNonNull(GraphQLID) },
	  author: {
		  type: AuthorType,
		  resolve: getAuthorForBook,
		}
	})
  })