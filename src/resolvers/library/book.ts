import {Book} from "../../resources/library/types/bookType";
import {authors, books} from "../../resources/library/data";

export function getBookById(_: any, args: any) {
    return books.find(book => (book.id === args.id))
}

export function getAuthorForBook(book: Book) {
    return authors.find(author => author.id === book.authorId)
}

export const getBooksWhere = function(_: any, args: any) {

    return books.filter( book => (
        (book.id === args.id)
        || 
        (book.year !== undefined && book.year === args.year)
        ||
        (book.name.includes(args.name_matches_keyword))
    ))
}
