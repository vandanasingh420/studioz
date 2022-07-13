import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private http: HttpClient) { }
    public baseURL = `http://localhost:3000`

    getAllData(): Observable<any> {
        return this.http.get(`${this.baseURL}/post`)
    }
    postData(data: any): Observable<any> {
        return this.http.post(`${this.baseURL}/post`, data)
    }
}
