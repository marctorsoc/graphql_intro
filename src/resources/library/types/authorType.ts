
import {
    GraphQLObjectType,
    GraphQLString,
	GraphQLNonNull,
	GraphQLList,
	GraphQLID,
	GraphQLInt,
} from "graphql"
import { getBooksForAuthor, getNumBooksForAuthor } from "../../../resolvers/library/author";
import {BookType} from "./bookType";

export interface Author {
	id: string,
	name: string,
}

export const AuthorType: GraphQLObjectType = new GraphQLObjectType({
	name: 'Author',
	description: 'This represents an author of books',
	fields: () => ({
	  	id: { type: new GraphQLNonNull(GraphQLID) },
	  	name: { type: new GraphQLNonNull(GraphQLString) },
		books: {
			type: new GraphQLList(BookType), 
			resolve: getBooksForAuthor
		},
		num_books: {
			type: GraphQLInt,
			resolve: getNumBooksForAuthor,
			},
		})
  })
  