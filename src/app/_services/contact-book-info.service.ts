import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contactBookInfo } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class ContactBookInfoService {
  baseUrl = "/api/contactsDetails";

  constructor(private http: HttpClient) { }

  addContactBookData(contactBookData): Observable<contactBookInfo[]> {
    return this.http.post<contactBookInfo[]>(this.baseUrl, contactBookData, {
      headers: new HttpHeaders()
        .set('Content-type', 'application/json')
    });
  }

  getContactBookData(): Observable<contactBookInfo[]> {
    return this.http.get<contactBookInfo[]>(this.baseUrl);
  }

  getContactById(contactId) {
    return this.http.get<contactBookInfo>(this.baseUrl + '/' +contactId);
  }

  updateContactBookData(contactId, contactBookData): Observable<number> {
    console.log(contactId)
    return this.http.post<number>(this.baseUrl + '/' + contactId, contactBookData, {
      headers: new HttpHeaders()
        .set('Content-type', 'application/json')
    });
  }

  deleteContactBookData(contactId): Observable<number> {
    console.log(contactId)
    return this.http.delete<number>(this.baseUrl + '/' + contactId, {
      headers: new HttpHeaders()
        .set('Content-type', 'application/json')
    });
  }
}
