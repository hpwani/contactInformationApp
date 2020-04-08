import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contactBookInfo } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class ContactBookInfoService {
  baseUrl = "/api/contactsDetails";

  constructor(private http: HttpClient) { }

  getContactBookData(): Observable<contactBookInfo[]> {
    return this.http.get<contactBookInfo[]>(this.baseUrl);
  }
}
