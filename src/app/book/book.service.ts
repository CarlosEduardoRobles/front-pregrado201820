import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Book } from './book';
import { BookDetail } from './book-detail';


import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const books = '/books';


/**
* The service provider for everything related to books
*/
@Injectable()
export class BookService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Returns the Observable object containing the list of books retrieved from the API
    * @returns The list of books in real time
    */
    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(API_URL + books);
    }
    
    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getBookDetail(bookId): Observable<BookDetail> {
        return this.http.get<BookDetail>(API_URL + books + '/' + bookId);
    }
    
}
