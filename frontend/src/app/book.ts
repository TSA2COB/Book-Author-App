import { Author } from './author';

export class Book {
	id: string;
	
	author: Author;

	title: string;
	description: string;
	publicationDate: string;
	price: number;
}
