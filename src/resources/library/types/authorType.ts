
import {
    GraphQLObjectType,
    GraphQLString,
	GraphQLNonNull,
	GraphQLList,
	GraphQLID,
	GraphQLInt,
} from "graphql"
import { 
	getBooksForAuthor, 
	getNumBooksForAuthor, 
	getAgeForAuthor 
} from "../../../resolvers/library/author";
import {BookType} from "./bookType";

export interface Author {
	id: string,
	name: string,
	yearBorn: number,
	yearDeath: number,
}

export const AuthorType: GraphQLObjectType = new GraphQLObjectType({
	name: 'Author',
	description: 'This represents an author of books',
	fields: () => ({
	  	id: { type: new GraphQLNonNull(GraphQLID) },
	  	name: { type: new GraphQLNonNull(GraphQLString) },
		yearBorn: { type: new GraphQLNonNull(GraphQLInt) },
		yearDeath: { type: GraphQLInt },
		books: {
			type: new GraphQLList(BookType), 
			resolve: getBooksForAuthor
		},
		num_books: {
			type: GraphQLInt,
			resolve: getNumBooksForAuthor,
			},
		age: {
			type: GraphQLInt,
			resolve: getAgeForAuthor
		}
		}),
		
  })
  