import {Author} from "../../resources/library/types/authorType";
import {authors, books} from "../../resources/library/data";


export function getAuthorById(_: any, args: any) {
    return authors.find(author => (author.id === args.id))
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

export const getBooksForAuthor = function(author: Author) {
    return books.filter( book => book.authorId === author.id)
}

export const getNumBooksForAuthor = function(author: Author) {
    return getBooksForAuthor(author).length
}

export const getAgeForAuthor = function(author: Author) {
    if(author.yearDeath !== undefined)
        return null
    let currentYear = new Date().getFullYear()
    return currentYear -  author.yearBorn
}