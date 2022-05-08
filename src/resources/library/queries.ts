
import {
    GraphQLInt,
	GraphQLList,
	GraphQLString,
	GraphQLID,
	GraphQLBoolean,
} from "graphql"
import {authors, books} from './data';
import {AuthorType} from "./types/authorType";
import {BookType} from "./types/bookType";
import { getBookById, getBooksWhere } from "../../resolvers/library/book";
import { getAuthorById } from "../../resolvers/library/author";

export const LibraryQueries = {
	books: {
		type: new GraphQLList(BookType),
		description: 'List of All Books',
		resolve: () => books
	},
	book: {
		type: BookType,
		description: "Get book by Id",
		args: {id: {type: GraphQLID}},
		resolve: getBookById,
	},
	books_where: {
		type: new GraphQLList(BookType),
		description: 'All books satisfying any of the conditions',
		args: {
			id: { type: GraphQLID },
			name_matches_keyword: {type: GraphQLString}, 
			year: { type: GraphQLInt },
			multiple: {type: GraphQLBoolean},
			do_any: {type: GraphQLBoolean},
		},
		resolve: getBooksWhere,
	},
	authors: {
		type: new GraphQLList(AuthorType),
		description: 'List of All Authors',
		resolve: () => authors
	},
	author: {
		type: AuthorType,
		description: 'A Single Author given the id',
		args: {id: { type: GraphQLID }},
		resolve: getAuthorById
	},
	// not needed since the fields have this already
	// author_for_book: {
	// 	type: AuthorType,
	// 	description: 'Books for a given author',
	// 	args: {
	// 		id: { type: GraphQLID }
	// 	},
	// 	resolve: getAuthorForBook
	// },
	// books_for_author: {
	// 	type: new GraphQLList(BookType),
	// 	description: 'Books for a given author',
	// 	args: {
	// 		id: { type: GraphQLID }
	// 	},
	// 	resolve: getBooksForAuthor
	// },
	// num_books_for_author: {
	// 	type: GraphQLInt,
	// 	description: 'Num books for a given author',
	// 	args: {
	// 		id: {type: GraphQLID}
	// 	},
	// 	resolve: getNumBooksForAuthor
	// }
}