import { generateUuid } from "../../utils"

export const authors = [
	{ id: generateUuid(), name: 'J. K. Rowling' , yearBorn: 1965},
	{ id: generateUuid(), name: 'J. R. R. Tolkien', yearBorn: 1892, yearDeath: 1973 },
	{ id: generateUuid(), name: 'Brent Weeks', yearBorn: 1977 }
]

export const books = [
	{ id: generateUuid(), name: 'Harry Potter and the Chamber of Secrets', authorId: authors[0].id, year: 1996 },
	{ id: generateUuid(), name: 'Harry Potter and the Prisoner of Azkaban', authorId: authors[0].id },
	{ id: generateUuid(), name: 'Harry Potter and the Goblet of Fire', authorId: authors[0].id },
	{ id: generateUuid(), name: 'The Fellowship of the Ring', authorId: authors[1].id, year: 1939 },
	{ id: generateUuid(), name: 'The Two Towers', authorId: authors[1].id, year: 1942 },
	{ id: generateUuid(), name: 'The Return of the King', authorId: authors[1].id, year: 1945},
	{ id: generateUuid(), name: 'The Way of Shadows', authorId: authors[2].id, year: 1960 },
	{ id: generateUuid(), name: 'Beyond the Shadows', authorId: authors[2].id, year: 1942 }
]

// TODO: add BookComment
// export interface BookComment {

// }