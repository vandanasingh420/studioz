import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private http: HttpClient) { }
    public baseURL = `http://localhost:3000`
    private previousUrl: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public previousUrl$: Observable<any> = this.previousUrl.asObservable();
    setPreviousUrl(previousUrl: string) {
        this.previousUrl.next(previousUrl);
    }
    getAllData(): Observable<any> {
        return this.http.get(`${this.baseURL}/post`)
    }
    postData(data: any): Observable<any> {
        return this.http.post(`${this.baseURL}/post`, data)
    }

    find(id: any): Observable<any> {
        return this.http.get(this.baseURL + '/post/' + id)
            .pipe(
                catchError(this.errorHandler)
            )
    }

    update(id: any, post: any): Observable<any> {
        return this.http.put(this.baseURL + '/post/' + id, post)
            .pipe(
                catchError(this.errorHandler)
            )
    }

    delete(id: any) {
        return this.http.delete(this.baseURL + '/post/' + id)
            .pipe(
                catchError(this.errorHandler)
            )
    }

    errorHandler(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(errorMessage);
    }
}

