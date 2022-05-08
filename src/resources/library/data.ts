// export interface BookComment {

// }
import seedrandom from "seedrandom";
var myrng = seedrandom('marc');

const getUID = function(){
	return String(Math.abs(myrng.int32())).padStart(10, "0")
}

export interface Author {
	id: string,
	name: string,
}

export const authors = [
	{ id: getUID(), name: 'J. K. Rowling' },
	{ id: getUID(), name: 'J. R. R. Tolkien' },
	{ id: getUID(), name: 'Brent Weeks' }
]

export interface Book {
	id: string,
	name: string,
	year: number,
	authorId: string,
}

export const books = [
	{ id: getUID(), name: 'Harry Potter and the Chamber of Secrets', authorId: authors[0].id, year: 1996 },
	{ id: getUID(), name: 'Harry Potter and the Prisoner of Azkaban', authorId: authors[0].id },
	{ id: getUID(), name: 'Harry Potter and the Goblet of Fire', authorId: authors[0].id },
	{ id: getUID(), name: 'The Fellowship of the Ring', authorId: authors[1].id, year: 1939 },
	{ id: getUID(), name: 'The Two Towers', authorId: authors[1].id, year: 1942 },
	{ id: getUID(), name: 'The Return of the King', authorId: authors[1].id, year: 1945},
	{ id: getUID(), name: 'The Way of Shadows', authorId: authors[2].id, year: 1960 },
	{ id: getUID(), name: 'Beyond the Shadows', authorId: authors[2].id, year: 1942 }
]
